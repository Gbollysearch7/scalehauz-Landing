"use client";

import { Reveal } from "@/components/Reveal";

const logos = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCm0YXmTjneKvX1kWUNTMr_DSfub_eQMiauXPzGRDCcN_eM-PAHGmwxWKuDefbcAPUUOlYHy9qqlYdir6S_eEVo_tNpI9HXbRYRDki-ihLrUGOLLSshnypiplHL9tWvQt-0jPJydw9cQCzgYBOX4ZGV5mvudfrQsLFEVKCt7KbxcyIy_M0YOp0t5d-LCZmbeoPIjm6cdKlgpFJ0zDwX2SAk7RFiroAbq00Q_eiKK0R5tG6hk-ri4BVBTU0tMJ5sDWeynFRnExMfgpc",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAUBge0hm6c8ROSxsR4LjLhWSbcsF9ZBuJd74zT_Yn27zgqh1zLth_Rm0movKpwJQ4XN0Pmikbe5GVnyoCNDfqKBVLv3Zt1DqDB1g-V7OBMxTyTQnWChIE_U70mlo8rA56u-XhgVKjGXKb7GWoeuTdmwEuD9RizfIp2ESVCLkinCPbPqvLQ-Ut27oftH43WOVW0kKE_S62PHk1EfIOYPfvka3Mtpmzi8Nlb5Myu1sp-67pMhZHLHA8RSGqDvlHp1ztI25fYBKrPJUs",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAkBfoNQakUzbX-JAMPdBPAR3sTX2_xSlgZU_gmfmlaHiOhqU3O7qe4P9DE0fEVJ7m8Uv0TGZeyg5WqahutOAOs66I8dZ7T7R0MTsLnCXndGn-IngBhHzcuc5R6e9tfNLppmds92QshNGXRWyDWfW8BIv7Ur-DelCYEeaIBeYY3bQk3QV28BESttxkkRFE4Ru4J15arCqoz1Nc0Q2OCeOZ2hCog-TBdmmSaN82PfUaGZRrkwcL95WrXVNj6g_Icb8IO54rDM6P0dbQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDmsvZXfjOkTMvLmIsV_a92e1ib8tZswdK_Yy6enAe9KYybF-hn-vpawMyViMK6JskIL2_XOv-QPkQT47JU1U0eFwMNEer0V5PdEv-uZnqSTp6LibsQbFgIWRh73A70jwAwa89f2NS7XUY3TpTGAxggI9XPWFX-j-loEMWtX2aWUSAE-4vp_FyvD7eujAg-qd1l1I0pB8mtdXuMrhzAlZ7a6J0wLAeFW-gP78r2YCjMHaAPp9wscaEO1R3_-pbTTx3z74Awd4-Fo-c",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA-ok4dH6yS0wqsEgKpoX-L-hl0xhgPhRMdFf_xfVX4ZxOl6zRGncCNgGjCQxT0hJpWgofCCTdLiK1hRHzIwmDqjOoyGRcVpuT1oawMODi0t6wIjraZJlwEankDiElJFNf6WIG-CSFhOtAjw74xaXeHtvjWvJI7dVv-t24BHqu2osk5_OcwUSTCrhtMjn_3g2BrOA_OHe_5Mkd5ZDxLzimVvx_YhMnQqiUgF_J77kH3nHGyy-CqMJgR9Kk9yylzLOIeG0ljek-y-Rg"
];

export const TrustBar = () => {
    return (
        <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 border-y border-white/10">
            <div className="max-w-7xl mx-auto">
                <Reveal width="100%">
                    <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-12 md:flex-row md:justify-between">
                        <p className="text-[10px] sm:text-xs font-mono text-white/30 uppercase tracking-widest shrink-0">Trusted By</p>
                        <div className="flex-1 w-full grid grid-cols-3 sm:grid-cols-5 gap-6 sm:gap-8 md:gap-12 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity duration-500">
                            {logos.slice(0, 5).map((url, i) => (
                                <div
                                    key={i}
                                    className={`w-16 sm:w-20 md:w-24 h-5 sm:h-6 bg-center bg-no-repeat bg-contain brightness-200 contrast-200 grayscale hover:grayscale-0 transition-all duration-300 ${i >= 3 ? 'hidden sm:block' : ''}`}
                                    style={{ backgroundImage: `url("${url}")` }}
                                />
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
