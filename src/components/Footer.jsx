import React from 'react'
import { FaCode, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='footer'>
      <a
        href='https://github.com/Virkkunen'
        target="_blank"
        rel='noopener noreferrer'
      >
        <FaGithub size="16px"/>
        @Virkkunen
      </a>
      <a
        href='https://github.com/Virkkunen/dice'
        target="_blank"
        rel='noopener noreferrer'
      >
        <FaCode size="16px"/>
        source
      </a>
    </div>
  )
}
