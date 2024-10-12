import { WorkType } from '@/types/common';

export default function exportAltText(exportFormat: 'csv' | 'txt' | 'json', selectedWorks: WorkType[]) {
  const altTexts = extractAltTexts(selectedWorks);
  const content = formatContent(altTexts, exportFormat);
  const blob = createBlob(content, exportFormat);
  downloadFile(blob, `alt_texts.${exportFormat}`);
}

function extractAltTexts(works: WorkType[]): string[] {
  return works.filter((work) => work.answer).map((work) => work.answer!);
}

function formatContent(altTexts: string[], format: string): string {
  switch (format) {
    case 'csv':
      return ['Alt Text', ...altTexts].join('\n');
    case 'json':
      return JSON.stringify(altTexts, null, 2);
    case 'txt':
    default:
      return altTexts.join('\n');
  }
}

function createBlob(content: string, format: string): Blob {
  const mimeType = format === 'json' ? 'application/json' : 'text/plain';
  return new Blob([content], { type: `${mimeType};charset=utf-8;` });
}

function downloadFile(blob: Blob, fileName: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
