import Shopping from "../assets/Shopping";
import {
  BsPlusLg,
  BsFillFileTextFill,
  BsFileImageFill,
  BsFillHeartFill,
} from "react-icons/bs";
import { RiCompassDiscoverLine, RiFolder3Fill } from "react-icons/ri";
import { BiTrendingUp } from "react-icons/bi";
import { MdColorLens } from "react-icons/md";
import { IoFolderSharp, IoSettings, IoExitOutline } from "react-icons/io5";

export const konuBasligi = [
  {
    icon: <Shopping color=" #66D158" />,
    desc: "E-Ticaret",
  },
  {
    icon: <Shopping color="#FF9F0A" />,
    desc: "Ürün & Marka",
  },
  {
    icon: <Shopping color="#0A84FF" />,
    desc: "Sosyal Medya",
  },
  {
    icon: <Shopping color="#FF375F" />,
    desc: "Reklamlar",
  },
  {
    icon: <Shopping color="#AC8E68" />,
    desc: "Blog Yazımı",
  },
  {
    icon: <Shopping color="#FFD60A" />,
    desc: "Satış & Pazarlama",
  },
  {
    icon: <Shopping color="#64D2FF" />,
    desc: "E-Mail",
  },
  {
    icon: <Shopping color="#BF5AF2" />,
    desc: "SEO",
  },
];

export const dilSecimi = [
  {
    icon: <Shopping color=" #66D158" />,
    lang: "Türkçe",
  },
  {
    icon: <Shopping color="#FF9F0A" />,
    lang: "İngilizce",
  },
];

export const varyantSayiysi = [1, 2];

export const yaraticilikSecimi = [
  "İçerik Oluşturucu",
  "Kısa Açıklama",
  "Yorum Yanıtlayıcı",
  "Yorum Oluşturucu",
  "Madde İşaretleyici",
  "BAB Yönetimi",
  "Cümle Genişletici",
  "Cümle Tamamlayıcı",
];

export const dilTonu = [
  "Resmi",
  "Mütevazi",
  "Eğlenceli",
  "Bilgilendirici",
  "İlham Verici",
  "Neşeli",
  "Tutkulu",
  "Düşünceli",
];

export const menuItemData = [
  {
    icon: <BsPlusLg />,
    text: "Yeni Proje",
    class1: "icon",
    class1C: 'clickedIcon',
    class2: "mood2",
    class2C: "clickedMood",
    classText: "text",
    classMenuItem: "menuItem",
  },
  {
    icon: <RiCompassDiscoverLine />,
    text: "Keşfet",
    class1: "icon",
    class2: "mood2",
    classMenuItem: "menuItem",
    classText: "text ",
    class1C: 'clickedIcon',
    class2C: "clickedMood",
  },
  {
    icon: <BsFillFileTextFill />,
    text: "AI Metin Yazarı",
    class1: "icon2 activeIcon",
    classText: "text activeText",
    classMenuItem: "menuItem active",
    class1C: 'icon2 activeIcon',

  },
  {
    icon: <BsFileImageFill />,
    text: "AI Görsel Oluşturucu",
    classText: "text",
    class1: "icon2",
    class1C: "icon2",
    classMenuItem: "menuItem",
  },

  {
    icon: <BiTrendingUp />,
    text: "Trendler",
    class1: "icon",
    class2: "mood2",
    class1C: 'clickedIcon',
    class2C: "clickedMood",
    classText: "text",
    classMenuItem: "menuItem",
  },
  {
    icon: <MdColorLens />,
    text: "Renk Analizi",
    class1: "icon",
    class2: "mood2",
    class1C: 'clickedIcon',
    class2C: "clickedMood",
    classText: "text",
    classMenuItem: "menuItem",
  },
  {
    icon: <RiFolder3Fill />,
    text: "Projelerim",
    classText: "text",
    class1: "icon2",
    class1C: "icon2",
    classMenuItem: "menuItem",
  },
  {
    icon: <BsFillHeartFill />,
    text: "Favorilerim",
    class1: "icon",
    classText: "text",
    class2: "mood2",
    class1C: 'clickedIcon',
    class2C: "clickedMood",
    classMenuItem: "menuItem",
  },
  {
    icon: <IoFolderSharp />,
    text: "Paketler",
    class1: "icon2",
    class1C: "icon2",
    classText: "text",
    classMenuItem: "menuItem",
  },

  {
    icon: <IoSettings />,
    text: "Ayarlar",
    class1: "icon2",
    class1C: "icon2",
    classText: "text",
    classMenuItem: "menuItem",
  },
  {
    icon: <IoExitOutline />,
    text: "Çıkış Yap",
    classText: "text",
    class1: "icon2",
    class1C: "icon2",
    classMenuItem: "menuItem",
  },
];
