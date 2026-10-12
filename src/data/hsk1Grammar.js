// 48 Tata Bahasa Lengkap HSK 1 (Standar 3.0 Kurikulum Resmi)
// Re-export dari grammarPoints.js untuk konsistensi alias impor modul

import { GRAMMAR_POINTS, GRAMMAR_CATEGORIES } from './grammarPoints.js';

export * from './grammarPoints.js';
export { GRAMMAR_POINTS, GRAMMAR_CATEGORIES };
export const HSK1_GRAMMAR = GRAMMAR_POINTS;
export const HSK1_GRAMMAR_CATEGORIES = GRAMMAR_CATEGORIES;
export default GRAMMAR_POINTS;
