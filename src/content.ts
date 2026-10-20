export const brand = {
 name:'VisualzByWillz', location:'Abuja, Nigeria', registration:'9902277',
 instagram:'https://www.instagram.com/visualzbywillzmedia/', portfolio:'https://drive.google.com/drive/folders/1OTxfuKYyNFl8iPP-JctCXRZjDZCJrex_',
 bio:'I’m a documentary filmmaker and visual storyteller with experience across the private and government sectors. I currently serve as a visual storyteller and media aide to the Honourable Minister of State for Budget and Economic Planning. Through filmmaking, photography and editing, I turn ideas, experiences and real-life moments into compelling visual stories.'
};
export type Project={id:string;title:string;category:'Documentary'|'Videography'|'Photography'|'Video Editing';description:string;role:string;thumbnail:string;video?:string;images?:string[];client?:string;year?:string};
// Add only authentic projects approved for public display. Empty galleries are hidden.
export const projects:Project[]=[];
export const services=[
 {title:'Documentary filmmaking',tag:'People. Places. Perspectives.',description:'Visual stories centred on people, experiences and real-world subjects. From the first conversation to the final frame, the story comes first.'},
 {title:'Videography',tag:'Every moment has a story.',description:'Video coverage and production shaped around your project’s story and purpose, with a considered eye for the moments that matter.'},
 {title:'Video editing',tag:'Find the story in the footage.',description:'Turning footage into a cohesive visual narrative through thoughtful selection, pacing and sequencing.'},
 {title:'Photography',tag:'A moment, held.',description:'Still imagery that captures people, moments and stories. A considered perspective, one frame at a time.'},
 {title:'Visual storytelling',tag:'An idea, brought into focus.',description:'Developing a clear visual narrative that connects your subject with its audience.'}
];
