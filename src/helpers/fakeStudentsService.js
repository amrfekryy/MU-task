
// add array extension that returns a random value
Array.prototype.getRandom = function(){
  return this[Math.floor(Math.random() * this.length)];
}

export default function fakeStudentsService ({ count }) {

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
  const status = ['Under Review', 'Initial Acceptance', 'Conditional Acceptance', 'Rejected']
  const majors = ['Medicine', 'Engineering', 'Pharmacy', 'Computer Science', 'Nursing']

  const out = []
  for (let i = 0; i < count; i++) {
    out.push({ 
      name: names.getRandom()['en'], 
      status: status.getRandom(), 
      major: majors.getRandom() 
    }) 
  }
  return out  
}
