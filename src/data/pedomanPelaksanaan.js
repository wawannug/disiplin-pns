export const pedomanPelaksanaan = [
    {
        id: 1,
        ketentuan: "pelanggaran terhadap kewajiban dan/atau larangan"
    },
    {
        id: 2,
        ketentuan: "mekanisme pemeriksaan dugaan pelanggaran hukuman disiplin"
    },
    {
        id: 3,
        ketentuan: "mekanisme penetapan penjatuhan hukuman disiplin"
    },
    {
        id: 4,
        ketentuan: "mekanisme penyelesaian dugaan pelanggaran jam kerja"
    },
    {
        id: 5,
        ketentuan: "implementas pemotongan tunjangan terhadap Pegawai Negeri Sipil yang dijatuhi hukuman disiplin"
    }
]

export const pelanggaran = [
    {
        id: "a",
        uraian: "Pelanggaran yang bersifat administratif, berupa:",
        jenis: [
            {
                id: 1,
                pelanggaran: "tidak mematuhi kewajiban untuk ditempatkan di seluruh wilayah Negara Kesatuan Republik Indonesia"
            },
            {
                id: 2,
                pelanggaran: "tidak memenuhi kewajiban untuk menghadiri dan mengucapkan sumpah/janji PNS",
            },
            {
                id: 3,
                pelanggaran: "tidak melaporkan harta kekayaan kepada pejabat yang berwenang sesuai dengan ketentuan peraturan perundang-undangan",
            }
        ]
    },
    {
        id: "b",
        uraian: "Pelanggaran yang bersifat non administratif",
        jenis: []
    },
]

export const pemeriksaan = [
    {
        id: "a",
        uraian: "Atasan langsung atau Tim Pemeriksa melakukan pemeriksaan sesuai dengan ketentuan Peraturan Pemerintah Nomor 94 Tahun 2021 tentang Disiplin Pegawai Negeri Sipil, dengan ketentuan sebagai berikut:",
        ketentuan: [
            {
                id: 1,
                poin: "pemeriksaan atas dugaan pelanggaran hukuman disiplin ringan dilakukan oleh atasan langsung"
            },
            {
                id: 2,
                poin: "pemeriksaan atas dugaan pelanggaran hukuman disiplin sedang dilakukan oleh atasan langsung atau Tim Pemeriksa",
            },
            {
                id: 3,
                poin: "pemeriksaan atas dugaan pelanggaran h-ukuman disiplin berat dilakukan oleh Tim Pemeriksa"
            }
        ]
    },
    {
        id: "b",
        uraian: "Pelaksanaan pemeriksaan mengacu pada ketentuan peraturan perundang-undangan dan/atau ketentuan mengenai pe-tunjuk pelaksanaan pemeriksaan pelanggaran disiplin dan penjatuhan hukuman disiplin di lingkungan Kementerian Keuangan"
    }
]

export const penetapan = [
    {
        id: "a",
        uraian: "pejabat yang berwenang menghukum dan melakukan penetapan penjatuhan hukuman disiplin sesuai dengan. ketentuan Peraturan Pemerintah Nomor 94 Tahun 2021 tentang Disiplin Pegawai Negeri Sipi"
    },
    {
        id: "b",
        uraian: "tingkat dan jenis hukuman disiplin",
        jenis: [
            {
                id: 1,
                tingkat: "ringan",
                tingkatan: [
                    {
                        id: 1,
                        jenis: "teguran lisan"
                    },
                    {
                        id: 2,
                        jenis: "teguran tertulis"
                    },
                    {
                        id: 3,
                        jenis: "pernyataan tidak puas secara tertulis"
                    }
                ]
            },
            {
                id: 2,
                tingkat: "sedang",
                tingkatan: [
                    {}, {}, {}
                ]
            },
            {
                id: 3,
                tingkat: "berat",
                tingkatan: [
                    {
                        id: 1,
                        jenis: "Pejabat Pengawas",
                        penjelasan: "",
                        hukuman: [
                            {
                                id: "a)",
                                hukuman: "pemberhentian dari Jabatan Pengawas"
                            }
                        ],
                        keterangan: "selama 12 (dua belas) bulan.",
                    }
                ]
            }
        ]
    }
]