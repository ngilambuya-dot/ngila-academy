import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentRoot = path.join(process.cwd(), 'content');

export interface Lesson {
    slug: string;
    title: string;
    metadata: {
        title: string;
        topic: string;
        subtopic: string;
        level: string;
        duration: string;
        learningObjectives: string[];
        tags: string[];
    };
    content: string;
}

export function getSubjects(): string[] {
    try {
        return fs.readdirSync(contentRoot).filter(f => !f.startsWith('.'));
    } catch {
        return [];
    }
}

export function getTopics(subject: string): string[] {
    try {
        const subjectPath = path.join(contentRoot, subject);
        return fs.readdirSync(subjectPath).filter(f => !f.startsWith('.'));
    } catch {
        return [];
    }
}

export function getLessons(subject: string, topic: string): { slug: string; title: string; duration?: string }[] {
    try {
        const topicPath = path.join(contentRoot, subject, topic);
        console.log('📂 Looking for lessons in:', topicPath); // DEBUG

        // Check if the folder exists
        if (!fs.existsSync(topicPath)) {
            console.error('❌ Folder does NOT exist:', topicPath);
            return [];
        }

        const files = fs.readdirSync(topicPath).filter(f => f.endsWith('.md')).sort();
        console.log('📄 Found files:', files); // DEBUG
        console.log('📊 Number of lesson files:', files.length); // DEBUG

        return files.map(file => {
            const slug = file.replace('.md', '');
            const filePath = path.join(topicPath, file);
            const content = fs.readFileSync(filePath, 'utf8');
            const { data } = matter(content);
            return {
                slug,
                title: data.title || slug.replace(/-/g, ' '),
                duration: data.duration || '10 min'
            };
        });
    } catch (error) {
        console.error('❌ Error reading lessons:', error);
        return [];
    }
}

export function getLessonContent(subject: string, topic: string, slug: string): Lesson | null {
    try {
        const filePath = path.join(contentRoot, subject, topic, `${slug}.md`);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);
        return {
            slug,
            title: data.title || slug.replace(/-/g, ' '),
            metadata: {
                title: data.title || slug.replace(/-/g, ' '),
                topic: data.topic || topic,
                subtopic: data.subtopic || '',
                level: data.level || 'Intermediate',
                duration: data.duration || '10 min',
                learningObjectives: data.learningObjectives || [],
                tags: data.tags || []
            },
            content
        };
    } catch (error) {
        console.error('❌ Error reading lesson content:', error);
        return null;
    }
}

export function getAllLessons(): { subject: string; topic: string; lesson: Lesson }[] {
    const subjects = getSubjects();
    const allLessons: { subject: string; topic: string; lesson: Lesson }[] = [];

    for (const subject of subjects) {
        const topics = getTopics(subject);
        for (const topic of topics) {
            const lessons = getLessons(subject, topic);
            for (const lesson of lessons) {
                const content = getLessonContent(subject, topic, lesson.slug);
                if (content) {
                    allLessons.push({ subject, topic, lesson: content });
                }
            }
        }
    }

    return allLessons;
}

export function searchLessons(query: string) {
    const allLessons = getAllLessons();
    const searchTerm = query.toLowerCase();

    return allLessons.filter(({ lesson }) => {
        const title = lesson.title.toLowerCase();
        const content = lesson.content.toLowerCase();
        const tags = lesson.metadata.tags.map(t => t.toLowerCase());
        const objectives = lesson.metadata.learningObjectives.map(o => o.toLowerCase());

        return title.includes(searchTerm) ||
            content.includes(searchTerm) ||
            tags.some(t => t.includes(searchTerm)) ||
            objectives.some(o => o.includes(searchTerm));
    });
}

export function getSubjectMetadata(subject: string): { name: string; description: string; icon: string } {
    const metadata: Record<string, { name: string; description: string; icon: string }> = {
        mathematics: {
            name: 'Mathematics',
            description: 'Master mathematics from basic arithmetic to advanced calculus',
            icon: '📐'
        },
        computing: {
            name: 'Computing',
            description: 'Learn programming, databases, web development and more',
            icon: '💻'
        }
    };
    return metadata[subject] || { name: subject, description: '', icon: '📚' };
}

export function getTopicMetadata(subject: string, topic: string): { name: string; description: string } {
    const metadata: Record<string, Record<string, { name: string; description: string }>> = {
        mathematics: {
            arithmetic: { name: 'Arithmetic', description: 'Numbers, operations, fractions, and percentages' },
            algebra: { name: 'Algebra', description: 'Expressions, equations, inequalities, and functions' },
            geometry: { name: 'Geometry', description: 'Shapes, angles, area, volume, and proofs' },
            statistics: { name: 'Statistics', description: 'Data analysis, probability, and distributions' },
            calculus: { name: 'Calculus', description: 'Limits, derivatives, integrals, and applications' }
        },
        computing: {
            fundamentals: { name: 'Computer Fundamentals', description: 'Hardware, software, operating systems, and networks' },
            programming: { name: 'Programming', description: 'Algorithms, Python, and programming concepts' },
            databases: { name: 'Databases', description: 'SQL, database design, and data management' },
            'web-development': { name: 'Web Development', description: 'HTML, CSS, JavaScript, and frameworks' },
            'data-science': { name: 'Data Science', description: 'Data analysis, visualization, and machine learning' }
        }
    };
    return metadata[subject]?.[topic] || { name: topic, description: '' };
}