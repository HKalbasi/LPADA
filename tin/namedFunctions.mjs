export const value = [
  {
    title: 'اسم دادن به برنامه',
    text: [
      'از اینجای آموزش به بعد، ما به برنامه ای که می نویسیم اسم می دهیم.',
      'این کار فوایدی دارد که بعدا با آن آشنا می شویم.',
      'برای اسم دادن به برنامه، ابتدا const که یک کلمه کلیدی است را می نویسیم. نوشتن const یک قرارداد بین ما و کامپیوتر است.',
      'سپس اسم برنامه را می نویسیم. حرف اول باید حرفی انگلیسی باشد و حروف بعد می توانند حرف انگلیسی یا عدد باشند.',
      'سپس یک کاراکتر = می گذاریم و سپس محتوای برنامه را مانند قبل می نویسیم.',
      'در انتها یک علامت ; نیز می گذاریم. این علامت نیز قرارداد است.',
      'برای تست برنامه، اسمی که برای برنامه گذاشتید را در قسمت نام برنامه و ورودی را مثل قبل در قسمت ورودی بنویسید.',
      'برای رد کردن این مرحله، کافی است برنامه ای بنویسید که دو عدد را در هم ضرب کند.'
    ],
    default: {
      "code": 
`const main = (a, b) => a + b;
`
      ,
      input: '12, 28',
    },
    test: [[2, 5],[12, -4]],
    judge: (x, y) => x * y,
  },
];