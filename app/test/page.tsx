'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FileText, Clock, Award, RefreshCw, Download, Printer, BookOpen, GraduationCap, CheckSquare } from 'lucide-react';

// Question type definitions
interface ExamQuestion {
    id: number;
    section: 'A' | 'B';
    marks: number;
    question: string;
    type: string;
    parts?: { label: string; text: string; marks: number }[];
}

export default function TestPage() {
    const [examGenerated, setExamGenerated] = useState(false);
    const [examType, setExamType] = useState('cat');
    const [examNumber, setExamNumber] = useState(1);
    const [level, setLevel] = useState('secondary');
    const [questions, setQuestions] = useState<ExamQuestion[]>([]);
    const [totalMarks, setTotalMarks] = useState(0);
    const [examTitle, setExamTitle] = useState('');
    const [schoolName, setSchoolName] = useState('Ngila Academy');

    // Generate random numbers for different exam versions
    const generateRandom = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const generateFigures = () => {
        return {
            n1: generateRandom(2, 10),
            n2: generateRandom(10, 30),
            n3: generateRandom(3, 8),
            n4: generateRandom(15, 25),
            n5: generateRandom(40, 80),
            n6: generateRandom(100, 500),
            n7: generateRandom(5, 20),
            n8: generateRandom(1000, 5000),
            n9: generateRandom(2, 6),
            n10: generateRandom(20, 50),
            n11: generateRandom(3, 7),
            n12: generateRandom(30, 70),
            a1: generateRandom(2, 10),
            d1: generateRandom(2, 6),
            termPos1: generateRandom(15, 25),
            termPos2: generateRandom(50, 70),
            gp_a: generateRandom(2, 8),
            gp_r: generateRandom(2, 4),
            matrix_a: generateRandom(1, 5),
            matrix_b: generateRandom(2, 6),
            matrix_c: generateRandom(1, 4),
            matrix_d: generateRandom(2, 5),
            vec_a: generateRandom(2, 6),
            vec_b: generateRandom(1, 4),
            vec_c: generateRandom(3, 8),
            diff_a: generateRandom(2, 5),
            diff_b: generateRandom(1, 4),
            diff_c: generateRandom(3, 6),
            ap_n: generateRandom(16, 20),
            marksA: generateRandom(2, 3),
        };
    };

    const generateExam = () => {
        const figs = generateFigures();
        const isCAT = examType === 'cat';
        const total = isCAT ? 30 : 60;
        setTotalMarks(total);

        const schools = ['Kahutini Secondary', 'Ngila Academy', 'Kajiado High', 'Mombasa School', 'Nairobi Academy'];
        const school = schools[Math.floor(Math.random() * schools.length)];
        setSchoolName(school);

        const examName = isCAT ? `CAT ${examNumber}` : 'End of Term Examination';
        setExamTitle(`${school} - Mathematics ${examName}`);

        const newQuestions: ExamQuestion[] = [];

        if (isCAT) {
            // CAT: Section A (10 × 1 mark) + Section B (4 × 5 marks)

            // Section A: 10 questions × 1 mark
            const sectionA = [
                { q: `Evaluate using BODMAS: ${figs.n1 * 3} + ${figs.n2} ÷ ${figs.n3} × ${figs.n4}`, type: 'BODMAS' },
                { q: `Simplify: ${figs.n1}/${figs.n3} + ${figs.n4}/${figs.n5}`, type: 'Fractions' },
                { q: `Express ${figs.n1 * 10 + figs.n2}% as a decimal`, type: 'Percentages' },
                { q: `Simplify: ${figs.n1}³ × ${figs.n1}²`, type: 'Indices' },
                { q: `Solve: ${figs.n2}x + ${figs.n4} = ${figs.n2 * 3 + figs.n4}`, type: 'Algebra' },
                { q: `Find the next term: ${figs.a1}, ${figs.a1 + figs.d1}, ${figs.a1 + 2 * figs.d1}, ...`, type: 'Sequences' },
                { q: `Find the mean of: ${figs.n1}, ${figs.n2}, ${figs.n3}, ${figs.n4}, ${figs.n5}`, type: 'Statistics' },
                { q: `Find: sin(${figs.n10}°) + cos(${figs.n10}°)`, type: 'Trigonometry' },
                { q: `Find the determinant: [[${figs.matrix_a}, ${figs.matrix_b}], [${figs.matrix_c}, ${figs.matrix_d}]]`, type: 'Matrices' },
                { q: `Differentiate: y = ${figs.diff_a}x³ - ${figs.diff_b}x² + ${figs.diff_c}x - ${figs.n1}`, type: 'Calculus' }
            ];

            sectionA.forEach((item, index) => {
                newQuestions.push({
                    id: index + 1,
                    section: 'A',
                    marks: 1,
                    question: `${index + 1}. ${item.q}`,
                    type: item.type
                });
            });

            // Section B: 4 questions × 5 marks
            const sectionB = [
                {
                    q: `Solve the quadratic equation: x² - ${figs.n2 + figs.n3}x + ${figs.n2 * figs.n3} = 0`,
                    type: 'Algebra',
                    parts: [
                        { label: 'a', text: 'Factorise the expression', marks: 2 },
                        { label: 'b', text: 'Find the roots of the equation', marks: 3 }
                    ]
                },
                {
                    q: `A right-angled triangle has a hypotenuse of ${figs.n6} cm and an angle of ${figs.n10}°.`,
                    type: 'Trigonometry',
                    parts: [
                        { label: 'a', text: 'Find the side opposite the angle', marks: 2 },
                        { label: 'b', text: 'Find the side adjacent to the angle', marks: 3 }
                    ]
                },
                {
                    q: `Given the sequence: ${figs.a1}, ${figs.a1 + figs.d1}, ${figs.a1 + 2 * figs.d1}, ...`,
                    type: 'Sequences',
                    parts: [
                        { label: 'a', text: 'Find the common difference', marks: 1 },
                        { label: 'b', text: 'Find the nth term', marks: 2 },
                        { label: 'c', text: `Find the ${figs.termPos1}th term`, marks: 2 }
                    ]
                },
                {
                    q: `Differentiate: y = ${figs.diff_a}x³ - ${figs.diff_b}x² + ${figs.diff_c}x - ${figs.n1}`,
                    type: 'Calculus',
                    parts: [
                        { label: 'a', text: 'Find dy/dx', marks: 3 },
                        { label: 'b', text: `Find the gradient when x = ${figs.n1}`, marks: 2 }
                    ]
                }
            ];

            sectionB.forEach((item, index) => {
                newQuestions.push({
                    id: 11 + index,
                    section: 'B',
                    marks: 5,
                    question: `${11 + index}. ${item.q}`,
                    type: item.type,
                    parts: item.parts
                });
            });

        } else {
            // FINAL EXAM: Section A (6-8 questions × 2-3 marks) + Section B (8 questions, choose 4 × 10 marks)

            const numSectionA = generateRandom(6, 8);
            const sectionAMarks = Array.from({ length: numSectionA }, () => generateRandom(2, 3));

            const sectionA = [
                { q: `Evaluate using BODMAS: ${figs.n1 * 4} - ${figs.n2} ÷ ${figs.n3} × (${figs.n4} + ${figs.n5})`, type: 'BODMAS' },
                { q: `Simplify: ${figs.n2}/${figs.n4} + ${figs.n3}/${figs.n5}`, type: 'Fractions' },
                { q: `A shirt costs KSh ${figs.n8}. Find the price after a ${figs.n10}% discount.`, type: 'Percentages' },
                { q: `Simplify: (${figs.n1}³ × ${figs.n1}⁴) ÷ ${figs.n1}²`, type: 'Indices' },
                { q: `Solve: log₁₀x = ${figs.n1}`, type: 'Logarithms' },
                { q: `Simplify: ${figs.n2}x + ${figs.n4} - ${figs.n3}x + ${figs.n5}`, type: 'Algebra' },
                { q: `The angles of a triangle are ${figs.n1}x, ${figs.n2}x, and ${figs.n3}x. Find x.`, type: 'Geometry' },
                { q: `Find the mean of: ${figs.n1}, ${figs.n2}, ${figs.n3}, ${figs.n4}, ${figs.n5}`, type: 'Statistics' },
                { q: `Find the determinant: [[${figs.matrix_a}, ${figs.matrix_b}], [${figs.matrix_c}, ${figs.matrix_d}]]`, type: 'Matrices' },
                { q: `Differentiate: y = ${figs.diff_a}x⁴ - ${figs.diff_b}x² + ${figs.diff_c}`, type: 'Calculus' },
                { q: `Find the next two terms: ${figs.a1}, ${figs.a1 + figs.d1}, ${figs.a1 + 2 * figs.d1}, ...`, type: 'Sequences' },
                { q: `Calculate: sin(${figs.n10}°) + cos(${figs.n10}°)`, type: 'Trigonometry' }
            ];

            const shuffledA = [...sectionA].sort(() => Math.random() - 0.5);
            const selectedA = shuffledA.slice(0, numSectionA);

            selectedA.forEach((item, index) => {
                newQuestions.push({
                    id: index + 1,
                    section: 'A',
                    marks: sectionAMarks[index],
                    question: `${index + 1}. ${item.q}`,
                    type: item.type
                });
            });

            // Section B: 8 questions
            const sectionB = [
                {
                    q: `Arithmetic Progression: The sum of the ${figs.termPos1}th and ${figs.termPos2}th terms of an AP is ${figs.n2 * figs.n3 + figs.n4 * 2}. Given that the 7th term is ${figs.n4 * 2 + figs.n1}, calculate:`,
                    type: 'Sequences & Series',
                    parts: [
                        { label: 'a', text: 'The common difference', marks: 3 },
                        { label: 'b', text: 'The first term', marks: 3 },
                        { label: 'c', text: `The sum of the first ${figs.ap_n} terms of the AP`, marks: 4 }
                    ]
                },
                {
                    q: `Given that the 1st, 5th, and 13th terms of the AP form the first 3 consecutive terms of a GP, find:`,
                    type: 'Sequences & Series',
                    parts: [
                        { label: 'a', text: 'The common ratio of the GP', marks: 5 },
                        { label: 'b', text: `The sum of the first ${figs.n2} terms of the GP`, marks: 5 }
                    ]
                },
                {
                    q: `Vectors: Given vectors a = ${figs.n1}i + ${figs.n2}j and b = ${figs.n3}i - ${figs.n4}j, find:`,
                    type: 'Vectors',
                    parts: [
                        { label: 'a', text: 'a + b', marks: 2 },
                        { label: 'b', text: '2a - 3b', marks: 3 },
                        { label: 'c', text: `Find k if ka + b is perpendicular to a - b`, marks: 5 }
                    ]
                },
                {
                    q: `Matrices: Given A = [[${figs.matrix_a}, ${figs.matrix_b}], [${figs.matrix_c}, ${figs.matrix_d}]] and B = [[${figs.matrix_a + 1}, ${figs.matrix_b - 1}], [${figs.matrix_c + 2}, ${figs.matrix_d - 2}]], find:`,
                    type: 'Matrices',
                    parts: [
                        { label: 'a', text: 'A + B', marks: 3 },
                        { label: 'b', text: 'A × B', marks: 4 },
                        { label: 'c', text: 'The determinant of A', marks: 3 }
                    ]
                },
                {
                    q: `Differentiation: Given f(x) = ${figs.diff_a}x³ - ${figs.diff_b}x² + ${figs.diff_c}x + ${figs.n1}`,
                    type: 'Calculus',
                    parts: [
                        { label: 'a', text: 'Find f\'(x)', marks: 3 },
                        { label: 'b', text: `Find the stationary points of f(x)`, marks: 4 },
                        { label: 'c', text: `Determine the nature of the stationary points`, marks: 3 }
                    ]
                },
                {
                    q: `Integration: Find the following integrals:`,
                    type: 'Calculus',
                    parts: [
                        { label: 'a', text: `∫(${figs.diff_a}x³ - ${figs.diff_b}x² + ${figs.diff_c}) dx`, marks: 5 },
                        { label: 'b', text: `∫(${figs.diff_a}x + ${figs.diff_b})² dx`, marks: 5 }
                    ]
                },
                {
                    q: `A company records sales: ${figs.n1 * 10}, ${figs.n1 * 10 + figs.d1 * 10}, ${figs.n1 * 10 + figs.d1 * 20}, ...`,
                    type: 'Applications',
                    parts: [
                        { label: 'a', text: 'Identify the type of sequence', marks: 2 },
                        { label: 'b', text: `Find the expected sales in the ${figs.termPos1}th month`, marks: 4 },
                        { label: 'c', text: `Calculate the total sales for the first ${figs.ap_n} months`, marks: 4 }
                    ]
                },
                {
                    q: `A trader buys an item for KSh ${figs.n8 * 2} and marks it at KSh ${figs.n8 * 3}.`,
                    type: 'Financial Mathematics',
                    parts: [
                        { label: 'a', text: 'Calculate the percentage profit based on the cost price', marks: 2 },
                        { label: 'b', text: `The trader gives a ${figs.n10}% discount. Find the selling price`, marks: 4 },
                        { label: 'c', text: 'Calculate the actual profit percentage after the discount', marks: 4 }
                    ]
                }
            ];

            const shuffledB = [...sectionB].sort(() => Math.random() - 0.5);
            shuffledB.forEach((item, index) => {
                newQuestions.push({
                    id: 100 + index,
                    section: 'B',
                    marks: 10,
                    question: `${index + 1}. ${item.q}`,
                    type: item.type,
                    parts: item.parts
                });
            });
        }

        setQuestions(newQuestions);
        setExamGenerated(true);
    };

    const downloadPDF = () => {
        alert('PDF download will be available soon. You can print the exam using the Print button.');
    };

    const printExam = () => {
        window.print();
    };

    const sectionAQuestions = questions.filter(q => q.section === 'A');
    const sectionBQuestions = questions.filter(q => q.section === 'B');

    // Determine if we're showing CAT or Final
    const isCAT = examType === 'cat';

    return (
        <main className="min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-4 text-center">📝 Examination Generator</h1>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                    Generate KNEC/CDACC-style examination papers with marking schemes
                </p>

                {/* Exam Controls */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Exam Type</label>
                            <select
                                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                value={examType}
                                onChange={(e) => setExamType(e.target.value)}
                            >
                                <option value="cat">CAT (30 marks)</option>
                                <option value="final">Final Exam (60 marks)</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">CAT Number</label>
                            <select
                                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                value={examNumber}
                                onChange={(e) => setExamNumber(Number(e.target.value))}
                                disabled={examType !== 'cat'}
                            >
                                <option value={1}>CAT 1</option>
                                <option value={2}>CAT 2</option>
                                <option value={3}>CAT 3</option>
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
                        <div className="flex flex-wrap gap-3">
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
                {examGenerated && isCAT && (
                    <div id="exam-paper" className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg print:p-4">
                        <div className="text-center mb-8 border-b pb-4">
                            <h2 className="text-2xl font-bold">{examTitle}</h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                Time: 1 Hour | Total Marks: 30
                            </p>
                            <p className="text-sm text-gray-500">Instructions: Answer ALL questions</p>
                        </div>

                        {/* Section A */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-4">SECTION A (10 marks)</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                Answer ALL questions in this section. Each question carries 1 mark.
                            </p>
                            <div className="space-y-3">
                                {sectionAQuestions.map((q) => (
                                    <div key={q.id} className="border-b border-gray-200 dark:border-gray-700 py-3">
                                        <p className="text-sm">{q.question}</p>
                                        <p className="text-xs text-gray-400 mt-1">[1 mark]</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Section B */}
                        {sectionBQuestions.length > 0 && (
                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-4">SECTION B (20 marks)</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                    Answer ALL questions in this section. Each question carries 5 marks.
                                </p>
                                <div className="space-y-6">
                                    {sectionBQuestions.map((q) => (
                                        <div key={q.id} className="border-b border-gray-200 dark:border-gray-700 py-4">
                                            <p className="text-sm font-medium">{q.question}</p>
                                            {q.parts && (
                                                <div className="ml-4 mt-2 space-y-1">
                                                    {q.parts.map((part, idx) => (
                                                        <p key={idx} className="text-sm text-gray-600 dark:text-gray-400">
                                                            {String.fromCharCode(97 + idx)}) {part.text}
                                                            <span className="text-xs text-gray-400 ml-2">[{part.marks} marks]</span>
                                                        </p>
                                                    ))}
                                                </div>
                                            )}
                                            <p className="text-xs text-gray-400 mt-2">[5 marks]</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="text-center text-sm text-gray-500 border-t pt-4">
                            © {schoolName} - {new Date().getFullYear()}
                        </div>
                    </div>
                )}

                {examGenerated && !isCAT && (
                    <div id="exam-paper" className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg print:p-4">
                        <div className="text-center mb-8 border-b pb-4">
                            <h2 className="text-2xl font-bold">{examTitle}</h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                Time: 2 Hours | Total Marks: ~60
                            </p>
                            <p className="text-sm text-gray-500">Instructions: Answer ALL questions in Section A and ANY FOUR questions in Section B</p>
                        </div>

                        {/* Section A */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-4">SECTION A</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                Answer ALL questions in this section. Each question carries 2 or 3 marks.
                            </p>
                            <div className="space-y-3">
                                {sectionAQuestions.map((q) => (
                                    <div key={q.id} className="border-b border-gray-200 dark:border-gray-700 py-3">
                                        <p className="text-sm">{q.question}</p>
                                        <p className="text-xs text-gray-400 mt-1">[{q.marks} marks]</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Section B */}
                        {sectionBQuestions.length > 0 && (
                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-4">SECTION B (40 marks)</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                    Answer <span className="font-bold text-blue-600">ANY FOUR</span> questions from this section. Each question carries 10 marks.
                                </p>
                                <div className="space-y-6">
                                    {sectionBQuestions.map((q) => (
                                        <div key={q.id} className="border-b border-gray-200 dark:border-gray-700 py-4">
                                            <p className="text-sm font-medium">{q.question}</p>
                                            {q.parts && (
                                                <div className="ml-4 mt-2 space-y-1">
                                                    {q.parts.map((part, idx) => (
                                                        <p key={idx} className="text-sm text-gray-600 dark:text-gray-400">
                                                            {String.fromCharCode(97 + idx)}) {part.text}
                                                            <span className="text-xs text-gray-400 ml-2">[{part.marks} marks]</span>
                                                        </p>
                                                    ))}
                                                </div>
                                            )}
                                            <p className="text-xs text-gray-400 mt-2">[10 marks]</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="text-center text-sm text-gray-500 border-t pt-4">
                            © {schoolName} - {new Date().getFullYear()}
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