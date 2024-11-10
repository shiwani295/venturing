import React from 'react'
import Link from 'next/link'
import { FaUnlockAlt } from "react-icons/fa";
import { IoAlertCircle } from "react-icons/io5";
import { LuClipboardSignature } from "react-icons/lu";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdEventNote } from "react-icons/md";
import { MdNoteAlt } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa";

const menuItems = [
  { href: '?type=workflow-timeline', icon: MdEventNote, label: 'Work flow Timeline' },
  { href: '?type=user-detail', icon: MdNoteAlt, label: 'User Detail' },
  { href: '?type=view-permission', icon: FaUnlockAlt, label: 'View Permission', extra: '(02)' },
  { href: '?type=pending-request', icon: IoAlertCircle, label: 'Pending Request', extra: '(04)' },
  { href: '?type=current-access', icon: FaUserCheck, label: 'Current Access', extra: '(01)' },
  { href: '?type=signature', icon: LuClipboardSignature, label: 'Signatures', extra: '(02)' },
  { href: '?type=system-detail', icon: HiMiniComputerDesktop, label: 'System Details' },
  { href: '?type=sharing-system', icon: IoShareSocialSharp, label: 'Sharing System' },
];

const linkClass = "flex items-center p-2 text-gray-900  hover:bg-blue-100 group borden border-t-0 border-b-0 border-r-0 hover:border-l-4  hover:border-l-blue-500";

const SideBar = () => {
  return (
    <div className="h-full  py-4 overflow-y-auto bg-gray-50">
      <ul className="px-5 space-y-2 font-medium">
        {menuItems.map(({ href, icon: Icon, label, extra }) => (
          <li key={href} className=''>
            <Link href={href} className={linkClass}>
              <span className="inline-flex items-center"><Icon size={17} /></span>
              <span className="flex-1 ms-3 whitespace-nowrap gap-2">
                {label} {extra && <span className='text-gray-400'>{extra}</span>}
              </span>
            </Link>
          </li>
        ))}
        <hr />
      </ul>
    </div>
  );
};

export default SideBar;

