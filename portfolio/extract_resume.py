import zipfile
import xml.etree.ElementTree as ET

path = r'c:\Users\Najma\OneDrive\Desktop\portfolio\najma resume (7).docx'
with zipfile.ZipFile(path) as z:
    xml = z.read('word/document.xml')
root = ET.fromstring(xml)
ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
texts = [t.text or '' for t in root.findall('.//w:t', ns)]
print(''.join(texts))
