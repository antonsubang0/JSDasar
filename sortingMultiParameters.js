import 'bootstrap@4.6.0'
import $ from 'jquery'

const karyawan = [
  {nama: 'Anton', bagian: 'Hatchbrood'},
  {nama: 'Yosan', bagian: 'Pullchick'},
  {nama: 'Eko', bagian: 'Hatcher'},
  {nama: 'Karyamin', bagian: 'Hatcher'},
  {nama: 'Susi', bagian: 'Hatchbrood'},
  {nama: 'Bowo', bagian: 'Pullchick'},
];
// cara barbar
const urutkan = () => {
  return karyawan.sort((a,b) => {
    if (a.bagian === b.bagian) {
      if (a.nama < b.nama){ return -1 } else if (a.nama > b.nama){ return +1 } else { return 0 }
    } else {
      if (a.bagian < b.bagian){ return -1 } else if (a.bagian > b.bagian){ return +1 } else { return 0 }
    }
  })
}
// cara yang paling umum
const urutkan1 = () => {
  return karyawan.sort(function (a, b) {
    return a.bagian.localeCompare(b.bagian) || b.nama - a.nama });
}
//cara coba gila
const urutkan2 = () => {
  return karyawan.sort((a, b)=>{ return b.bagian - a.bagian || b.nama - a.nama })
}

console.log(urutkan(), urutkan1(), urutkan2())
