import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";


const CHATBOT_THEME = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

const ChatBotHelper = () => {
    const steps = [
        {
            id: "1",
            message: "Selamat datang di Situs Web Disiplin PNS.",
            trigger: "2"
        },
        {
            id: "2",
            message: "Saya adalah bot yang akan membantu Anda.",
            trigger: "3"
        },
        {
            id: "3",
            message: "Apa yang ingin Anda cari terkait disiplin PNS?",
            trigger: "4"
        },
        {
            id: "4",
            options: [
                {
                    value: 1,
                    label: "Materi",
                    trigger: "31"
                },
                {
                    value: 2,
                    label: "Peraturan",
                    trigger: "6"
                },
                {
                    value: 3,
                    label: "Kuis",
                    trigger: "7"
                },
                {
                    value: 4,
                    label: "Templat surat",
                    trigger: "8"
                },
                {
                    value: 5,
                    label: "Artikel",
                    trigger: "9"
                },
            ],
        },
        {
            id: "5",
            options: [
                {
                    value: 1,
                    label: "Kewajiban",
                    component: (
                        <div className="text-center p-2 bg-[#EF6C00] text-white rounded-xl">
                            <Link to="/kewajiban">Materi Kewajiban PNS<br />Klik di sini</Link>
                        </div>
                    ),
                    trigger: "33"
                },
                {
                    value: 2,
                    label: "Larangan",
                    component: (
                        <div className="text-center p-2 bg-[#EF6C00] text-white rounded-xl">
                            <Link to="/larangan">Materi Larangan PNS<br />Klik di sini</Link>
                        </div>
                    ),
                    trigger: "33"
                },
                {
                    value: 3,
                    label: "Tingkat dan Jenis Hukuman",
                    component: (
                        <div className="text-center p-2 bg-[#EF6C00] text-white rounded-xl">
                            <Link to="/hukuman">Materi Tingkat dan Jenis Hukuman PNS<br />Klik di sini</Link>
                        </div>
                    ),
                    trigger: "33"
                },
                {
                    value: 4,
                    label: "Pejabat yang Berwenang Menghukum",
                    component: (
                        <div className="text-center p-2 bg-[#EF6C00] text-white rounded-xl">
                            <Link to="/pejabat">Materi Pejabat yang Berwenang Menghukum<br />Klik di sini</Link>
                        </div>
                    ),
                    trigger: "33"

                },
                {
                    value: 5,
                    label: "Tata Cara Pemeriksaan",
                    component: (
                        <div className="text-center p-2 bg-[#EF6C00] text-white rounded-xl">
                            <Link to="/pemeriksaan">Materi Tata Cara Pemeriksaan PNS<br />Klik di sini</Link>
                        </div>
                    ),
                    trigger: "33"
                },
                {
                    value: 6,
                    label: "Berlakunya Hukuman Disiplin",
                    component: (
                        <div className="text-center p-2 bg-[#EF6C00] text-white rounded-xl">
                            <Link to="/berlaku">Berlakunya Hukuman Disiplin<br />Klik di sini</Link>
                        </div>
                    ),
                    trigger: "33"
                },
                {
                    value: 7,
                    label: "Ingin langsung dialihkan ke halaman daftar materi",
                    component: (
                        <div className="text-center p-2 bg-[#EF6C00] text-white rounded-xl">
                            <Link to="/bahasan">Materi Disiplin PNS<br />Klik di sini</Link>
                        </div>
                    ),
                    trigger: "33"
                },
                {
                    value: 8,
                    label: "Kembali",
                    trigger: "3"
                }
            ]
        },
        {
            id: "6",
            component: (
                <div className="text-center p-2 bg-[#EF6C00] text-white rounded-xl">
                    <Link to="/peraturan">Kumpulan Peraturan Disiplin PNS<br />Klik di sini</Link>
                </div>
            ),
            trigger: "33"
        },
        {
            id: "7",
            component: (
                <div className="text-center p-2 bg-[#EF6C00] text-white rounded-xl">
                    <Link to="/kuis">Kuis Disiplin PNS<br />Klik di sini</Link>
                </div>
            ),
            trigger: "33"
        },
        {
            id: "8",
            component: (
                <div className="text-center p-2 bg-[#EF6C00] text-white rounded-xl">
                    <Link to="/templat">Templat Surat Pemeriksaan Disiplin PNS<br />Klik di sini</Link>
                </div>
            ),
            trigger: "33"
        },
        {
            id: "9",
            component: (
                <div className="text-center p-2 bg-[#EF6C00] text-white rounded-xl">
                    <Link to="/artikel">Artikel Disiplin PNS<br />Klik di sini</Link>
                </div>
            ),
            trigger: "33"
        },
        {
            id: "31",
            message: "Silakan pilih salah satu materi berikut:",
            trigger: "5"
        },
        {
            id: "33",
            message: "Ingin mencari yang lain?",
            trigger: "4"
        },


    ];

    return (
        <>
            <ThemeProvider theme={CHATBOT_THEME}>
                <ChatBot steps={steps} floating={true} />
            </ThemeProvider>
        </>
    );
};

export default ChatBotHelper;
