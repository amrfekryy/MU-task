
// add array extension that returns a random value
Array.prototype.getRandom = function(){
  return this[Math.floor(Math.random() * this.length)];
}

// groups of names, statuses and majors
const names = [
  { en: 'Ahmed', ar: 'أحمد' },
  { en: 'Ali', ar: 'علي' }, 
  { en: 'Mohamed', ar: 'محمد' }, 
  { en: 'Amr', ar: 'عمرو' }, 
  { en: 'Samy', ar: 'سامي' }, 
  { en: 'Zakaria', ar: 'زكريا' }, 
  { en: 'Hassan', ar: 'حسن' }, 
  { en: 'Omer', ar: 'عمر' }, 
]
export const statuses = [
  { full: 'Under Review', code: 'ur' },
  { full: 'Initial Acceptance', code: 'ia' },
  { full: 'Conditional Acceptance', code: 'ca' },
  { full: 'Rejected', code: 'r' },
]
const majors = ['Medicine', 'Engineering', 'Pharmacy', 'Computer Science', 'Nursing']


export default function fakeStudentsService ({ count }) {
  // generate data from random compositions
  const out = []
  for (let i = 0; i < count; i++) {
    const { en: name, ar: ar_name } = names.getRandom()
    const { full: status, code: st_code } = statuses.getRandom()
    const major = majors.getRandom()

    out.push({ name, ar_name, status, st_code, major }) 
  }
  return out  
}
