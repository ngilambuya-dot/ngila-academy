'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FileText, Clock, Award, RefreshCw, Download, Printer, BookOpen } from 'lucide-react';

interface ExamQuestion {
    id: number;
    section: 'A' | 'B';
    marks: number;
    question: string;
    type: string;
}

export default function TestPage() {
    const [examGenerated, setExamGenerated] = useState(false);
    const [examType, setExamType] = useState('cat');
    const [level, setLevel] = useState('secondary');
    const [questions, setQuestions] = useState<ExamQuestion[]>([]);
    const [totalMarks, setTotalMarks] = useState(0);
    const [examTitle, setExamTitle] = useState('');

    const generateExam = () => {
        // Generate CAT (30 marks) or Final Exam (70 marks)
        const isCAT = examType === 'cat';
        const total = isCAT ? 30 : 70;
        setTotalMarks(total);

        const schoolName = ['Kahutini Secondary', 'Ngila Academy', 'Kajiado High', 'Mombasa School'][Math.floor(Math.random() * 4)];
        const examName = isCAT ? 'CAT 1' : 'End of Term Examination';
        setExamTitle(`${schoolName} - Mathematics ${examName}`);

        // Generate Section A (BODMAS, Arithmetic, Algebra, etc.)
        const sectionAQuestions: ExamQuestion[] = [];
        const sectionBQuestions: ExamQuestion[] = [];

        if (isCAT) {
            // CAT: 15 questions × 2 marks = 30 marks
            const topics = [
                { q: 'Evaluate: 18 - 3(4 + 2) ÷ 3', type: 'BODMAS' },
                { q: 'Simplify: 2/3 + 3/4', type: 'Fractions' },
                { q: 'Convert 0.75 to a percentage', type: 'Decimals' },
                { q: 'Solve: 3x + 7 = 22', type: 'Algebra' },
                { q: 'Find the mean of: 5, 8, 12, 15, 20', type: 'Statistics' },
                { q: 'Simplify: (x²)³', type: 'Indices' },
                { q: 'Find the area of a circle with radius 7cm', type: 'Geometry' },
                { q: 'Solve: 2x - 5 = 13', type: 'Algebra' },
                { q: 'What is the square root of 144?', type: 'Arithmetic' },
                { q: 'Simplify: 3/5 + 1/5', type: 'Fractions' },
                { q: 'Find the perimeter of a rectangle 8cm by 5cm', type: 'Geometry' },
                { q: 'Convert 45% to a fraction', type: 'Percentages' },
                { q: 'Simplify: 3x + 2x - 5x', type: 'Algebra' },
                { q: 'Find the median of: 3, 7, 9, 12, 15', type: 'Statistics' },
                { q: 'Simplify: (3²)³', type: 'Indices' }
            ];

            // Randomly select 15 questions
            const shuffled = [...topics].sort(() => Math.random() - 0.5);
            const selected = shuffled.slice(0, 15);

            selected.forEach((item, index) => {
                sectionAQuestions.push({
                    id: index + 1,
                    section: 'A',
                    marks: 2,
                    question: `${index + 1}. ${item.q}`,
                    type: item.type
                });
            });
        } else {
            // Final Exam: Section A (30 marks) + Section B (40 marks)
            // Section A: 15 questions × 2 marks = 30 marks
            const sectionATopics = [
                { q: 'Evaluate: 18 - 3(4 + 2) ÷ 3', type: 'BODMAS' },
                { q: 'Simplify: 2/3 + 3/4', type: 'Fractions' },
                { q: 'Convert 0.75 to a percentage', type: 'Decimals' },
                { q: 'Solve: 3x + 7 = 22', type: 'Algebra' },
                { q: 'Find the mean of: 5, 8, 12, 15, 20', type: 'Statistics' },
                { q: 'Simplify: (x²)³', type: 'Indices' },
                { q: 'Find the area of a circle with radius 7cm', type: 'Geometry' },
                { q: 'Solve: 2x - 5 = 13', type: 'Algebra' },
                { q: 'What is the square root of 144?', type: 'Arithmetic' },
                { q: 'Simplify: 3/5 + 1/5', type: 'Fractions' },
                { q: 'Find the perimeter of a rectangle 8cm by 5cm', type: 'Geometry' },
                { q: 'Convert 45% to a fraction', type: 'Percentages' },
                { q: 'Simplify: 3x + 2x - 5x', type: 'Algebra' },
                { q: 'Find the median of: 3, 7, 9, 12, 15', type: 'Statistics' },
                { q: 'Simplify: (3²)³', type: 'Indices' }
            ];

            const shuffledA = [...sectionATopics].sort(() => Math.random() - 0.5);
            const selectedA = shuffledA.slice(0, 15);

            selectedA.forEach((item, index) => {
                sectionAQuestions.push({
                    id: index + 1,
                    section: 'A',
                    marks: 2,
                    question: `${index + 1}. ${item.q}`,
                    type: item.type
                });
            });

            // Section B: 4 questions × 10 marks = 40 marks
            const sectionBTopics = [
                { q: 'Solve the simultaneous equations: 2x + y = 7, x - y = 2', type: 'Algebra' },
                { q: 'A rectangle has length (x+3) and width (x-2). Find the area.', type: 'Geometry' },
                { q: 'Find the derivative of f(x) = 3x² - 2x + 1', type: 'Calculus' },
                { q: 'A population grows at 5% per year. Find the population after 3 years.', type: 'Sequences' },
                { q: 'Find the equation of a line through (2,3) and (4,7).', type: 'Coordinate Geometry' },
                { q: 'Solve: x² - 5x + 6 = 0', type: 'Quadratics' },
                { q: 'Find the standard deviation of: 4, 6, 8, 10, 12', type: 'Statistics' },
                { q: 'A cylinder has radius 7cm and height 10cm. Find its volume.', type: 'Mensuration' }
            ];

            const shuffledB = [...sectionBTopics].sort(() => Math.random() - 0.5);
            const selectedB = shuffledB.slice(0, 4);

            selectedB.forEach((item, index) => {
                sectionBQuestions.push({
                    id: 16 + index,
                    section: 'B',
                    marks: 10,
                    question: `${16 + index}. ${item.q}`,
                    type: item.type
                });
            });
        }

        setQuestions([...sectionAQuestions, ...sectionBQuestions]);
        setExamGenerated(true);
    };

    const downloadPDF = () => {
        // In a real implementation, this would generate a PDF
        alert('PDF download would be generated here. You can use libraries like jsPDF or html2pdf.');
    };

    const printExam = () => {
        window.print();
    };

    return (
        <main className="min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-4 text-center">📝 Examination Generator</h1>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                    Generate KNEC/CDACC-style examination papers with marking schemes
                </p>

                {/* Exam Controls */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Exam Type</label>
                            <select
                                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                value={examType}
                                onChange={(e) => setExamType(e.target.value)}
                            >
                                <option value="cat">CAT (30 marks)</option>
                                <option value="final">Final Exam (70 marks)</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Level</label>
                            <select
                                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                value={level}
                                onChange={(e) => setLevel(e.target.value)}
                            >
                                <option value="secondary">Secondary</option>
                                <option value="college">College</option>
                                <option value="diploma">Diploma</option>
                            </select>
                        </div>
                        <div className="flex items-end">
                            <button
                                onClick={generateExam}
                                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
                            >
                                <FileText size={18} />
                                Generate Exam
                            </button>
                        </div>
                    </div>
                    {examGenerated && (
                        <div className="flex gap-3">
                            <button
                                onClick={generateExam}
                                className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
                            >
                                <RefreshCw size={18} />
                                Regenerate
                            </button>
                            <button
                                onClick={downloadPDF}
                                className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition flex items-center justify-center gap-2"
                            >
                                <Download size={18} />
                                Download PDF
                            </button>
                            <button
                                onClick={printExam}
                                className="flex-1 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition flex items-center justify-center gap-2"
                            >
                                <Printer size={18} />
                                Print
                            </button>
                        </div>
                    )}
                </div>

                {/* Exam Paper */}
                {examGenerated && (
                    <div id="exam-paper" className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                        <div className="text-center mb-8 border-b pb-4">
                            <h2 className="text-2xl font-bold">{examTitle}</h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                Time: 2 Hours | Total Marks: {totalMarks}
                            </p>
                            <p className="text-sm text-gray-500">Instructions: Answer ALL questions</p>
                        </div>

                        {/* Section A */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-4">SECTION A (30 marks)</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                Answer ALL questions in this section. Each question carries 2 marks.
                            </p>
                            <div className="space-y-2">
                                {questions.filter(q => q.section === 'A').map((q) => (
                                    <div key={q.id} className="border-b border-gray-200 dark:border-gray-700 py-2">
                                        <p className="text-sm">{q.question}</p>
                                        <p className="text-xs text-gray-400 mt-1">[{q.marks} marks]</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Section B */}
                        {questions.filter(q => q.section === 'B').length > 0 && (
                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-4">SECTION B (40 marks)</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                    Answer ALL questions in this section. Each question carries 10 marks.
                                </p>
                                <div className="space-y-4">
                                    {questions.filter(q => q.section === 'B').map((q) => (
                                        <div key={q.id} className="border-b border-gray-200 dark:border-gray-700 py-4">
                                            <p className="text-sm">{q.question}</p>
                                            <p className="text-xs text-gray-400 mt-1">[{q.marks} marks]</p>
                                            <div className="mt-2 text-xs text-gray-400">
                                                <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{q.type}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="text-center text-sm text-gray-500 border-t pt-4">
                            © Ngila Academy - {new Date().getFullYear()}
                        </div>
                    </div>
                )}

                {!examGenerated && (
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-12 rounded-xl text-center">
                        <BookOpen className="mx-auto text-gray-400" size={64} />
                        <h3 className="text-xl font-bold mt-4">No Exam Generated</h3>
                        <p className="text-gray-500">Select your preferences and click "Generate Exam"</p>
                    </div>
                )}
            </div>
        </main>
    );
}