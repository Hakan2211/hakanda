import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getNotes() {
  const notesDirectory = path.join(process.cwd(), 'notes');
  
  // Get all MDX files
  const fileNames = fs.readdirSync(notesDirectory);
  const mdxFiles = fileNames.filter(fileName => fileName.endsWith('.mdx'));
  
  // Parse each file
  const notes = mdxFiles.map(fileName => {
    const filePath = path.join(notesDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    // Parse frontmatter and content
    const { data, content } = matter(fileContents);
    
    // Extract excerpt (first 150 characters of content, without code blocks)
    const cleanContent = content.replace(/```[\s\S]*?```/g, '').trim();
    const excerpt = cleanContent.substring(0, 150) + (cleanContent.length > 150 ? '...' : '');
    
    return {
      slug: data.slug || fileName.replace('.mdx', ''),
      date: data.date,
      title: data.title,
      topics: data.topics || [],
      excerpt,
      content
    };
  });
  
  // Sort by date descending (most recent first)
  notes.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  return notes;
}

export function getLatestNote() {
  const notes = getNotes();
  return notes[0] || null;
}
