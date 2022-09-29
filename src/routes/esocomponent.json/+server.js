import { json } from '@sveltejs/kit';
 
export async function GET() {
  return json({
    "version": "1.0",
    "type": "rich",
    "provider_name": "Esoterica",
    "provider_url": "",
    "width": 320,
    "height": 200,
    "title": "Robot Wizards Esoterica Test",
    "author_name": "Robot Wizard",
    "html": "<p>esotericaTest</p>"
  });
}