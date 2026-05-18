export const KDV_RATE = 0.20;

export type PackageId = "baslangic" | "performans";
export type BillingPeriod = "aylik" | "yillik";

export interface Package {
  id: PackageId;
  name: string;
  monthly: number;
  yearly: number;
  description: string;
  specs: string[];
  isRecommended?: boolean;
}

export const packages: Package[] = [
  {
    id: "baslangic",
    name: "Başlangıç Oyun VDS",
    monthly: 1200,
    yearly: 12000,
    description: "Pazar kurma, karakter açık bırakma ve hafif oyun kullanımı için ideal başlangıç paketi.",
    specs: [
      "4 Core CPU",
      "4 GB RAM",
      "75 GB NVMe SSD Disk",
      "vGPU Destekli Grafik Altyapısı",
      "1 Gbit Port",
      "Limitsiz Trafik",
      "Windows 10 Kurulu",
      "Uzak Masaüstü Erişimi"
    ]
  },
  {
    id: "performans",
    name: "Performans Oyun VDS",
    monthly: 1600,
    yearly: 16000,
    description: "Daha stabil kullanım, uzun süreli oturumlar ve daha rahat oyun deneyimi isteyenler için önerilir.",
    specs: [
      "6 Core CPU",
      "6 GB RAM",
      "100 GB NVMe SSD Disk",
      "vGPU Destekli Grafik Altyapısı",
      "1 Gbit Port",
      "Limitsiz Trafik",
      "Windows 10 Kurulu",
      "Uzak Masaüstü Erişimi"
    ],
    isRecommended: true
  }
];

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("tr-TR").format(price);
};
