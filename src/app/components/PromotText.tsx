"use client";
import { ReactTyped } from "react-typed";

function PromotText() {
  return (
    <div>
      <ReactTyped
        strings={[
          "Temukan Smartwatch Impian Anda di Sini!",
          "Tingkatkan Produktivitas Anda dengan Smartwatch",
          "Gaya Hidup Sehat Dimulai dari Pergelangan Tangan",
          "Hubungkan Diri Anda dengan Dunia Melalui Smartwatch",
          "Kenyamanan Tanpa Batas dengan Smartwatch Terbaru",
          "Diskon Spesial Smartwatch, Stok Terbatas!",
          "Beli Smartwatch Sekarang, Dapatkan Bonus Menarik!",
          "Smartwatch Berkualitas dengan Harga Terbaik Hanya di Sini!",
          "Penawaran Eksklusif untuk Pembelian Smartwatch Pertama Anda",
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </div>
  );
}

export default PromotText;
