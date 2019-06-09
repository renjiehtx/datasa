import { Component } from '@angular/core';
import { single } from './data';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  single: any[];
  multi: any[];

  view: any[] = [350, 280];

  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  showLegend = true;
  legendTitle = '比例';
  legendPosition = 'bottom';

  comments;



  positive = [
    { "comment": "就是啊，谁不想进大公司啊但人家大公司看不上你只要211985的呀有些事情不是想就可以了的 ", "user": "Page5-" },
    { "comment": "说的好像我想去哪里就能去哪里似的", "user": "我也有张旧船票" },
    { "comment": "有能力去大公司肯定大公司啊，钱少点都无所谓，第一份工作钱本来就不是最看重 ", "user": "和粘人男票的沙雕日常" },
    { "comment": "考公务员才是王道 ", "user": "michael_february" },
    { "comment": "能去大公司为什么要去小公司，蒲沺老江湖为你揭开fake鞋的神秘面纱", "user": "lxiao996" },
    { "comment": "有公司去就不错了吧", "user": "超甜薄荷糖" },
    { "comment": "必须大公司，就算跳槽简历也好看！", "user": "最搞笑博主" },
    { "comment": "大公司要你？说的好像你想进就能进似的", "user": "Zhu-Li朱" },
    { "comment": "有能力去大公司肯定大公司啊，钱少点都无所谓，第一份工作钱本来就不是最看重 ", "user": "和粘人男票的沙雕日常" },
    { "comment": "有能力就去大公司！", "user": "Yin_暖暖" },
    { "comment": "大公司不要你再去小公司 ", "user": "阿伦mkh" },
    { "comment": "公司不重要，重要的是带你的人要靠谱老板要靠谱，另外你什么都不清楚的情况下，优先选大公司。 ", "user": "陈伯伯chan" },
    { "comment": "小公司老板很重要，大公司上司很重要小公司遇到个好老板也是很不错的 ", "user": "罗曦曦和陈阿毛" },
  ]

  negative = [
   
    {
      "comment": "自主创业好，把别人的事业当成自己的事业干，总是那么别扭", "user": ""
    },
    { "comment": "大公司，小公司真的很会剥削人的 ", "user": "炒鸡开森的幸运鹅" },
    { "comment": "不一定哦  我就在一家小公司  因为人少老板就会每年组织出国旅游   每年工资也是大大增加 ", "user": "萌心跳" },
    { "comment": "哪个赚钱去那个", "user": "MyoTaeHyun" },
    { "comment": "在自己还不牛的时候，选择一个牛的平台，可以帮助自己变得更牛。自己牛了，在牛不牛的平台都能牛", "user": "Winee__" },
    {
      "comment": "看个人性格，大公司，讲流程，福利比较完善，喜欢稳定的，就去啊", "user": ""
    },
    {
      "comment": "小公司嘛，可以冒险……大环境不好，能进大公司最好，比如世界五百强 ", "user": ""
    },
    {
      "comment": "能去大公司直接去，不用犹豫。", "user": ""
    },
    {
      "comment": "不知道选什么的时候选大城市 选最流行的专业 可能会选错 但是试错的成本最低做错可能性最小的 ", "user": ""
    },
    {
      "comment": "年轻人就是试错成本很低，年轻时候多犯点错，后面的路才会更好走", "user": ""
    },
    {
      "comment": "所以要在试错成本低的时候多试错，意思是可以尝试不同的工作嘛", "user": ""
    },
    { "comment": "毕业几年 每次去的公司都很坑 哭…大家就说是我眼光问题…… ", "user": "Lin时七_浅花迷人不如你" },
    { "comment": "护士做了三年，毅然决定辞职，尝试了几个新鲜工作，都比护士做的开心，工资最高拿到了一万一", "user": "甜橙児" },
    { "comment": "记得千万别全部写在简历上，大公司不会喜欢一个经常换公司的员工！", "user": "禹彭" },
    { "comment": "现在的大学毕业生都面临一个问题就是高不成低不就，吃苦耐劳的传统美德日益单薄。 ", "user": "蚝哥呀" },
    {
      "comment": "普通本科，签了五六线市教育局直属重点高中，女，混日子", "user": ""
    },
    {
      "comment": " 哭了 还没找到工作 ", "user": ""
    },
    {
      "comment": " 要找到还是很容易的，但找到好的难", "user": ""
    },
    { "comment": "大概什么水平算是“好” ", "user": "奔跑的信仰" },
    {
      "comment": " 好找，只是找合适的难", "user": ""
    },
    { "comment": "今年为什么大裁员 ", "user": "他帅-他帅" },
    { "comment": "大学些什么专业决定你毕业时失业还是能找到好的工作 ", "user": "陶亚星" },
    { "comment": "去大城市吧，回老家的人现在想出去，比毕业时候难", "user": "是考神啊" },
    {
      "comment": "都可以吧 只是岗位好坏之别 ", "user": ""
    },
    { "comment": "找工作当然顺利，找好工作就千难万难了", "user": "爱裙子小姐姐" },
    {
      "comment": "特别不顺利，尤其作为一个工科女生，好像除了教育机构不嫌弃性别之外，别的都碰灰 ", "user": ""
    },
    { "comment": "去机关单位做合同工怎么样？有五险一金。 ", "user": "欣欣向荣888_20367" },
    { "comment": "IT行业的还是很好找。。。上海这起薪6k都找不到什么好的毕业生", "user": "财张江" },
    {
      "comment": "律所，顺利，但是工资开始很低 ", "user": ""
    },
    { "comment": "熬几年就好了，我朋友圈一妹纸熬几年，现在房子、车子、全世界旅游，加油。 ", "user": "不高兴的Teng小姐" },
    { "comment": "播音主持专业，好难就业，在北京一家创业电商公司，感觉有点潦倒，不知道该不该去做自己擅长的事 ", "user": "楊阿菁_" },
    { "comment": "我认为年轻的时候就应该去做自己喜欢的事。参加工作两三年后现在想换个行业感觉都是七上八下的！ ", "user": "大河向西流3" },
    { "comment": "特别不顺利，尤其作为一个工科女生，好像除了教育机构不嫌弃性别之外，别的都碰灰 ", "user": "hei-祖传黑" },
    { "comment": " 银行也比之前招的少 留学生也开始大量涌回国内 竞争越来越激烈 ", "user": "宇宙快乐女孩" },
    {
      "comment": "去年秋招企业明显减少，场场爆满，今天春招工资下降严重。", "user": ""
    },
    {
      "comment": "土木依旧容易，公考事业单位扎堆，考研人数剧增 ", "user": ""
    },
    {
      "comment": "处处碰壁，好运见几个11年应聘的人哈哈哈哈", "user": ""
    },
    { "comment": "我们专业典型的冷门变热门，报的时候冷的要死，毕业了感觉一片火热啊", "user": "Lin时七_浅花迷人不如你" },
    {
      "comment": "秋招时看似挺惨淡的，不过后来大家工作找的都不错 ", "user": ""
    },
    { "comment": "没能力就说没能力，啥大环境不好啊", "user": "银城武" }

  ]

  neutral = [
    {
      "comment": "现在就在纠结到底去什么公司", "user": ""
    },
    { "comment": "其实大部分人都选错了，比如选错了行业，找错了工作，选错了城市，没有后悔药 ", "user": "Stanlaw31" },
    { "comment": "又站在毕业的分岔口瑟瑟发抖", "user": "ARTEMIS赖嘉闪" },
    {
      "comment": "第一份工作10个月当时压力好大～～现在第二份工作已经快3年了～～一个并不讨厌的工作 ", "user": ""
    },
    { "comment": "都是必经之路，人生的选择还有好多。做自己擅长的，条件成熟加上想法可行，可以尝试实现。", "user": "Carieza" },
    { "comment": "在找工作刚好看到，我也是尝试了各种工作发现不适合自己", "user": "是松古不是松菇君" },
    {
      "comment": "好难，想要定居的城市找不到工作，找得到的是连自己都活不下去的工资，转行也不一定有人要还是本科毕业 ", "user": ""
    },
    { "comment": "真的难，不过总要慢慢来的呀 ", "user": "大Shawnda" },
    { "comment": "先择业再就业是是好办法，反正不要窝在家里面啃老 ", "user": "马山曼联" },
    { "comment": "上周刚去应聘公司上班，但是我写的工资和应聘工资不一样", "user": "HanYu頑張" },
    { "comment": "我都工作了六七年了. 然而我自己也摸不着头脑我到底喜欢什么？", "user": "熙熙ToKi" },
    { "comment": "正在找工作，很慌也很焦虑，感觉高不成低不就", "user": "长亭暖" },
    {
      "comment": "真的好难 莫得希望 ", "user": ""
    },
    { "comment": "有能力+有学历=未来可期。加油吧小伙伴们", "user": "南京文府书院" },
    { "comment": "大多数让你眼红羡慕的生活背后，都有你熬不了的苦承担不了的风险和压力。 ", "user": "不用吃土买轻奢" },
    {
      "comment": "职场不顺利，仍回头考研 ", "user": ""
    },
    { "comment": "考研不理想，职场也难闯。", "user": "" },

  ]



  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single })
  }

  onSelect(event) {
    console.log(event);
    if(event.name=='正面 35%'){
      this.comments = this.positive;
    }else if(event.name=='中性 40%'){
      this.comments = this.negative;
    }else if(event.name=='负面 15%'){
      this.comments = this.neutral;
      
    }
  }
}
