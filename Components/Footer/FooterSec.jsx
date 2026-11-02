"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

const popular = ["Beds", "Chairs", "Sofas", "Decor", "Storage", "Tables", "Modern Luxury"];
const service = ["About Us", "Theme feature", "FAQ", "Contact"];
const information = ["Return and Refunds", "Legal Area"];

const facebookIcon = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDHMn6KT2QAQ37ySqVVtvglQnuiNbg8Zy36lHs3x2e9w&s=10";
const YouTubeIcon = "data:image/png;base64,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"
// apni payment images in paths par rakh do (public/Payments/ folder)
const payments = [
    "data:image/png;base64,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",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLRKEKFI-qFRbGvpcibRjX8mx00_QY3inZ8rubPHhrQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtrTNpPwMzn_nxU8fwlRGMVLzI0QTMHdc7_WZ3V0O2yg&s=10",
    "data:image/png;base64,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",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu70F32M_q8gWO6EIcRJjhDczlIKaLIReSsej5trSxKA&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWQB6F_mnXlTm-AjOTNkXM5Rley4F1-EYyrWlbOtwfyQ&s=10",
];

const LinkList = ({ title, items }) => (
    <div>
        <h3 className="text-xl text-[#2b2a28] mb-8">{title}</h3>
        <ul className="flex flex-col gap-3">
            {items.map((item) => (
                <li key={item}>
                    <a href="#" className="text-[15px] text-[#3a3936] hover:underline">
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

const Footer = () => {
    return (
        <footer className="w-full bg-[#efede9] px-6 sm:px-10 lg:px-[4.5%] pt-16 text-[#2b2a28]">
            {/* Top columns */}
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                <LinkList title="Popular category" items={popular} />
                <LinkList title="Service" items={service} />
                <LinkList title="Information" items={information} />

                {/* Newsletter */}
                <div>
                    <h3 className="text-xl mb-8">Sign up to our Newsletter</h3>
                    <p className="text-[15px] leading-relaxed mb-6">
                        Be the first to know the least relases, news, collaborations,
                        exclusives and offers!
                    </p>

                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="flex items-center rounded-full border border-black/10 bg-white overflow-hidden"
                    >
                        <input
                            type="email"
                            placeholder="Email"
                            className="flex-1 bg-transparent px-4 py-3 text-sm outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-[#2b2a28] text-white text-sm px-6 py-3 rounded-full cursor-pointer"
                        >
                            Subscribe
                        </button>
                    </form>

                    <label className="mt-4 flex items-center gap-2 text-xs cursor-pointer">
                        <input type="checkbox" className="h-4 w-4" />
                        I want to sign up for the Newsletter.
                    </label>
                </div>
            </div>

            {/* Middle row: currency + social + payments */}
            <div className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-8">
                    <button className="flex items-center gap-2 text-[15px] cursor-pointer">
                        <img src="https://flagcdn.com/w20/us.png" alt="US" className="w-5" />
                        US /USD
                        <ChevronDown size={14} />
                    </button>

                    <div className="flex items-center gap-5">
                        {/* Facebook */}
                        <a href="#" aria-label="Facebook">
                            <img src={facebookIcon} alt="Facebook" className="h-[22px] w-[22px] object-contain" />
                        </a>
                        {/* X (Twitter) */}
                        <a href="#" aria-label="Twitter">
                            <img
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-KQUtAHY0_kl_WL-ZIzsy4jMvBX8SwWlSPhm0p6m1KA&s=10' alt="Twitter"
                                className="h-[22px] w-[22px] object-contain"
                            />
                        </a>
                        {/* Instagram */}
                        <a href="#" aria-label="Instagram">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6sEZ6sPHMJwV8mAVPbKbKDB-JMMnHM7L8zJ-eOKJP5w&s=10"
                                alt="Instagram"
                                className="h-[22px] w-[22px] object-contain"
                            />
                        </a>
                        {/* YouTube */}
                        <a href="#" aria-label="YouTube">
                            <img src={YouTubeIcon} alt="YouTube" className="h-[22px] w-[22px] object-contain" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    {payments.map((src) => (
                        <img key={src} src={src} alt="payment" className="h-9 w-auto rounded" />
                    ))}
                </div>
            </div>

            {/* Big NOOK image */}
            <img
                src="/Nook-logo.svg"
                alt="NOOK"
                className="mt-6 block w-full"
            />
        </footer>
    );
};

export default Footer;