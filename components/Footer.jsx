import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from "react-icons/ai"


export default function Footer() {
    return (
        <div className="footer-container">
            <p>2023 Techshopy All rights reserved &reg;</p>

            <p className="icons">
                <Link href="https://instagram.com" target="_blank">
                    <AiFillInstagram />
                </Link>
                <Link href="https://github.com/kaiowsz" target="_blank">
                    <AiFillGithub />
                </Link>
                <Link href="https://www.linkedin.com/in/kaiosilveir4/" target="_blank">
                    <AiFillLinkedin />
                </Link>

            </p>
        </div>
    )
}