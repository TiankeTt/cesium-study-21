import { useState, useRef, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function MenuBar({ works }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const dropdownRef = useRef(null)

  const currentWork = works.find(w => w.path === location.pathname) || works[0]

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (path) => {
    navigate(path)
    setOpen(false)
  }

  return (
    <div className="menu-bar">
      <div className="menu-title">Cesium 作品展示</div>
      <div className="menu-dropdown-wrapper" ref={dropdownRef}>
        <div
          className={`menu-dropdown-trigger ${open ? 'active' : ''}`}
          onClick={() => setOpen(!open)}
        >
          <span>{currentWork.title}</span>
          <svg
            className={`menu-arrow ${open ? 'open' : ''}`}
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>
        {open && (
          <div className="menu-dropdown-list">
            {works.map(work => (
              <div
                key={work.path}
                className={`menu-dropdown-item ${location.pathname === work.path ? 'active' : ''}`}
                onClick={() => handleSelect(work.path)}
              >
                <span className="item-title">{work.title}</span>
                <span className="item-desc">{work.description}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
