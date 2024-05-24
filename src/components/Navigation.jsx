import React from 'react'
import { BsGithub, BsTwitter } from 'react-icons/bs'

export const Navigation = () => {
  return (
    <div className="border-b bg-slate-100">
      <nav className="container flex justify-between items-center">
        <div className="font-semibold">React Forms</div>
        <div className="flex items-center gap-4 text-lg">
          <a href="https://github.com/Phoe-nix-89/React-Form-Validation" target="_blank">
            <BsGithub />
          </a>
          <a href="#" target="_blank">
            <BsTwitter />
          </a>
        </div>
      </nav>
    </div>
  )
}
