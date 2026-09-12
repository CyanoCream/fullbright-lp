import { STRUGGLES } from '@/data/landing';

export function AgitationSection() {
    return (
        <section
            id="agitation"
            className="[padding:56px_24px] [background:#F3F3F3]"
        >
            <div className="[margin:0_auto] [max-width:672px]">
                <div className="[margin-bottom:24px] [text-align:center]">
                    <div className="[display:inline-block] [border-radius:9999px] [padding:10px_24px] [font-size:13px] [font-weight:800] [letter-spacing:0.02em] [color:#D70808] [text-transform:uppercase] [box-shadow:0_4px_16px_rgba(0,0,0,0.06)] [background:#fff]">
                        Kamu Sudah Mencoba
                    </div>
                </div>

                <h2 className="[margin:0_0_20px] [text-align:center] [font-family:Nunito,sans-serif] [font-size:clamp(28px,3.6vw,42px)] [line-height:1.2] [font-weight:900] [color:#151515]">
                    Sudah Banyak Belajar,
                    <br />
                    <span className="[color:#D70808]">
                        Tapi Kenapa Skor Masih Stuck?
                    </span>
                </h2>

                <p className="[margin:0_0_36px] [text-align:center] [font-size:16px] [line-height:1.6] [color:#6b6b6b]">
                    Bukan karena kamu kurang berusaha. Hanya saja,{' '}
                    <b>usahamu belum memberikan hasil yang diharapkan.</b>
                </p>

                <StruggleTable />
                <EffortChart />
            </div>

            <div className="[display:flex] [flex-direction:column] [align-items:center] [gap:8px]">
                <p className="[margin:0] [text-align:center] [font-size:20px] [line-height:1.5] [font-weight:600] [color:#6b6b6b]">
                    Kamu tidak membutuhkan lebih banyak materi.
                </p>
                <p className="[margin:0] [text-align:center] [font-size:20px] [line-height:1.5] [font-weight:700] [color:#151515]">
                    Kamu butuh cara belajar yang terstruktur dan fokus ke pola
                    soal TOEFL
                </p>
                <div className="[margin-top:8px] [display:flex] [height:36px] [width:36px] [align-items:center] [justify-content:center] [border-radius:9999px] [font-size:18px] [color:#374151] [background:#F3F4F6]">
                    ↓
                </div>
            </div>
        </section>
    );
}

function StruggleTable() {
    return (
        <div className="[margin-bottom:32px] [overflow:hidden] [border-radius:20px] [box-shadow:0_4px_24px_rgba(0,0,0,0.07)] [background:#fff]">
            <div className="contents max-[559px]:hidden">
                <div className="[display:grid] [grid-template-columns:1fr_1fr] [gap:0] [background:#F9F9F9] [border-bottom:1px_solid_#ececec]">
                    <div className="[padding:16px_18px] [font-family:Nunito,sans-serif] [font-size:14px] [font-weight:900] [color:#151515]">
                        Yang sudah kamu lakukan
                    </div>
                    <div className="[padding:16px_18px] [font-family:Nunito,sans-serif] [font-size:14px] [font-weight:900] [color:#D70808] [border-left:1px_solid_#ececec]">
                        Yang kamu alami
                    </div>
                </div>
            </div>
            <div className="hidden max-[559px]:contents">
                <div className="[padding:15px_16px] [font-family:Nunito,sans-serif] [font-size:14px] [font-weight:900] [color:#151515] [background:#F9F9F9] [border-bottom:1px_solid_#ececec]">
                    Yang sudah kamu lakukan{' '}
                    <span className="[color:#D70808]">→ yang kamu alami</span>
                </div>
            </div>

            {STRUGGLES.map((row, i) => (
                <div
                    key={row.no}
                    className={`[display:grid] [grid-template-columns:1fr_1fr] [align-items:stretch] max-[559px]:[grid-template-columns:1fr] ${i < STRUGGLES.length - 1 ? '[border-bottom:1px_solid_#f2f2f2]' : ''}`}
                >
                    <div className="[display:flex] [align-items:flex-start] [gap:12px] [padding:18px] max-[559px]:[padding:16px_16px_10px]">
                        <span className="[flex-shrink:0] [padding-top:2px] [font-family:Nunito,sans-serif] [font-size:12px] [font-weight:900] [color:#c9c9c9]">
                            {row.no}
                        </span>
                        <p className="[margin:0] [font-size:15px] [line-height:1.55] [font-weight:600] [color:#151515]">
                            {row.effort}
                        </p>
                    </div>
                    <div className="[display:flex] [align-items:flex-start] [gap:10px] [padding:18px] [background:#FFFAFA] [border-left:1px_solid_#f2f2f2] max-[559px]:[padding:0_16px_16px_44px] max-[559px]:[background:transparent] max-[559px]:[border-left:initial]">
                        <p className="[margin:0] [font-size:15px] [line-height:1.55] [font-weight:700] [color:#D70808]">
                            {row.result}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

function EffortChart() {
    return (
        <div className="[margin-bottom:32px] [border-radius:20px] [padding:28px_24px] [box-shadow:0_4px_24px_rgba(0,0,0,0.07)] [background:#fff]">
            <div className="[margin:0_auto] [max-width:520px]">
                <p className="[margin:0_0_20px] [text-align:center] [font-size:12px] [font-weight:900] [letter-spacing:0.1em] [color:#D70808] [text-transform:uppercase]">
                    Kalau kamu belajar sendiri
                </p>
                <div className="[display:flex] [align-items:flex-end] [justify-content:center] [gap:clamp(20px,6vw,48px)] [padding-bottom:14px] [border-bottom:2px_solid_#151515]">
                    <div className="[display:flex] [flex-direction:column] [align-items:center] [gap:10px]">
                        <span className="[font-size:12px] [font-weight:900] [letter-spacing:0.06em] [color:#151515] [text-transform:uppercase]">
                            Effort kamu
                        </span>
                        <div className="[display:flex] [height:clamp(120px,26vw,160px)] [width:clamp(84px,22vw,116px)] [align-items:flex-end] [justify-content:center] [border-radius:10px_10px_0_0] [padding-bottom:12px] [background:#151515]">
                            <span className="[text-align:center] [font-size:11px] [line-height:1.3] [font-weight:800] [color:rgba(255,255,255,0.75)]">
                                Waktu &amp;
                                <br />
                                tenaga
                            </span>
                        </div>
                    </div>
                    <div className="[display:flex] [flex-direction:column] [align-items:center] [gap:10px]">
                        <span className="[font-size:12px] [font-weight:900] [letter-spacing:0.06em] [color:#D70808] [text-transform:uppercase]">
                            Kenaikan skor
                        </span>
                        <div className="[height:clamp(24px,6vw,34px)] [width:clamp(84px,22vw,116px)] [border-radius:10px_10px_0_0] [background:#D70808]"></div>
                    </div>
                </div>
                <p className="[margin:26px_0_0] [text-align:center] [font-family:Nunito,sans-serif] [font-size:18px] [line-height:1.3] [font-weight:900] [color:#151515]">
                    Effort yang kamu keluarkan{' '}
                    <span className="[color:#D70808]">
                        jauh lebih besar daripada kenaikan skormu.
                    </span>
                </p>
            </div>
        </div>
    );
}
