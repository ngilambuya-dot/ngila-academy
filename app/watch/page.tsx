import { Video, Play, Clock, Users } from 'lucide-react';

export default function WatchPage() {
    const videos = [
        { title: 'Introduction to Algebra', duration: '15 min', views: '1.2K', link: '#' },
        { title: 'Solving Linear Equations', duration: '20 min', views: '850', link: '#' },
        { title: 'Introduction to Geometry', duration: '18 min', views: '950', link: '#' },
        { title: 'Sequences and Series Explained', duration: '25 min', views: '600', link: '#' },
    ];

    return (
        <main className="min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-4 text-center">🎥 Watch Lessons</h1>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
                    Video explanations of key Mathematics concepts
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {videos.map((video) => (
                        <div key={video.title} className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                            <div className="bg-gray-200 dark:bg-gray-700 h-40 flex items-center justify-center relative">
                                <Play className="text-blue-600" size={48} />
                                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                    {video.duration}
                                </span>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold mb-1">{video.title}</h3>
                                <div className="flex gap-4 text-sm text-gray-500">
                                    <span className="flex items-center gap-1"><Clock size={14} /> {video.duration}</span>
                                    <span className="flex items-center gap-1"><Users size={14} /> {video.views}</span>
                                </div>
                                <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                                    Watch Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-xl hover:bg-red-700 transition"
                    >
                        <Video size={24} />
                        Visit YouTube Channel
                    </a>
                </div>
            </div>
        </main>
    );
}