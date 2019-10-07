export const value = [
  {
    title: "نوشته ها",
    text: [
      'در قسمت های قبل با ابزار های کار با اعداد و مقادیر true و false آشنا شدیم. در این قسمت با نوشته‌ها آشنا می شویم.',
      'هر چیزی که درون "" یا \'\' یا `` بنویسید تبدیل به نوشته می شود.',
      'برنامه رو به رو یک عدد از ورودی می‌گیرد و وضعیت آن نسبت به ۵ را به صورت یک عبارت فارسی نمایش می دهد. خروجی آن را به ازای ورودی های مختلف امتحان کنید.',
      'توجه کنید که هنگام نوشتن عبارت های فارسی در میان برنامه که معمولا کاراکتر های انگلیسی دارد، ممکن است به دلیل مشکلات چپ چین و راست چین، نتوانید برنامه را به خوبی ببینید. می‌توانید با اضافه کردن خط های بیشتر این مشکل را حل کنید. فاصله ها و اینتر ها معمولا تغییری در محتوای برنامه ایجاد نمی کنند.',
      'برای رد کردن این مرحله، برنامه‌ای بنویسید که یک مقدار بولی ( true یا false ) از ورودی بگیرد و اگر true بود عبارت "ورودی صحیح است" را خروجی دهد و در غیر این صورت عبارت "ورودی غلط است" را برگرداند.',
    ],
    default: {
      "code": 
`(x) => 
  x<5 
? 
  'ورودی کوچک‌تر از ۵ است' 
: 
    x === 5 
  ?
    \`ورودی برابر ۵ است\`
  : 
    "ورودی بزرگتر از ۵ است."
`
      ,
      "input": "12",
    },
    test: [[true],[false]],
    judge: (x) => x ? 'ورودی صحیح است' : 'ورودی غلط است',
  },
];