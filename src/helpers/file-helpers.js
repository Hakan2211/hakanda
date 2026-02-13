import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import React from 'react';
import { remark } from 'remark';
import remarkMdx from 'remark-mdx';
import { visit } from 'unist-util-visit';
import { toString } from 'mdast-util-to-string';
import remarkSlug from 'remark-slug';
import { slugify } from '@/lib/utils';

export async function getBlogPostList() {
  const fileNames = await readDirectory('/content');

  const blogPosts = [];

  for (let fileName of fileNames) {
    const rawContent = await readFile(`/content/${fileName}`);

    const { data: frontmatter } = matter(rawContent);

    blogPosts.push({
      slug: fileName.replace('.mdx', ''),
      ...frontmatter,
    });
  }

  return blogPosts.sort((p1, p2) => (p1.publishedOn < p2.publishedOn ? 1 : -1));
}

export async function getNoteList() {
  const fileNames = await readDirectory('/notes');

  const notes = [];

  for (let fileName of fileNames) {
    const rawContent = await readFile(`/notes/${fileName}`);

    const { data: frontmatter, content } = matter(rawContent);

    notes.push({
      slug: fileName.replace('.mdx', ''),
      content,
      ...frontmatter,
    });
  }

  return notes.sort((p1, p2) => (p1.date < p2.date ? 1 : -1));
}

export const loadBlogPost = React.cache(async function loadBlogPost(slug) {
  let rawContent;
  try {
    rawContent = await readFile(`/content/${slug}.mdx`);
  } catch (error) {
    return null;
  }

  const { data: frontmatter, content } = matter(rawContent);

  const headings = await extractHeadings(content);

  return { frontmatter, content, headings };
});

async function extractHeadings(mdxContent) {
  let headings = [];
  await remark()
    .use(remarkMdx)
    .use(remarkSlug)
    .use(() => (tree) => {
      visit(tree, 'heading', (node) => {
        const text = toString(node);
        const id =
          node.data && node.data.hProperties && node.data.hProperties.id
            ? node.data.hProperties.id
            : slugify(text);
        headings.push({ depth: node.depth, text, id });
      });
    })
    .process(mdxContent);
  return headings;
}

function readFile(localPath) {
  return fs.readFile(path.join(process.cwd(), localPath), 'utf8');
}

function readDirectory(localPath) {
  return fs.readdir(path.join(process.cwd(), localPath));
}
