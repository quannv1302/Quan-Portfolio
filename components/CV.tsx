import React from 'react';
import { Download, FileText } from 'lucide-react';
import { pdfs } from "@/assets/pdfMap";
const cvPdf = pdfs["CV-Nguyen-Van-Quan-UI-UX-Designer"];



const CV: React.FC = () => {
    return (
        <div className="pt-24 min-h-screen bg-slate-50 flex flex-col items-center justify-start px-4">
            <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl overflow-hidden mt-8 mb-16 border border-slate-100">

                {/* Header Section of the CV Viewer */}
                <div className="bg-slate-900 p-8 text-center sm:text-left sm:flex sm:justify-between sm:items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">CV của tôi</h1>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <button className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors shadow-lg shadow-indigo-600/20">
                            <Download className="w-5 h-5 mr-2" />
                            Download PDF
                        </button>
                    </div>
                </div>
                {/* PDF Placeholder / Viewer Area */}
                <div className="bg-slate-200 min-h-screen w-full flex justify-center p-0">
                    <iframe
                        src={cvPdf}
                        className="w-full h-screen"
                    />
                </div>

            </div>
        </div>
    );
};

export default CV;
