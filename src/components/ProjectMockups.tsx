/* ─── CRM Mockup ──────────────────────────────────────────────────────────── */
export function CRMMockup() {
  const cream = '#f6f3ee'
  const sidebar = '#eeebe6'
  const gold = '#d2b87a'
  const card = '#ffffff'
  const border = 'rgba(0,0,0,0.1)'
  const muted = '#5c5349'
  const textDim = '#b8a79c'

  const navItems = [
    { label: 'Inicio', active: false },
    { label: 'Clientes', active: true },
    { label: 'Ventas', active: false },
    { label: 'Pólizas', active: false },
    { label: 'Energía', active: false },
    { label: 'Casos', active: false },
    { label: 'Horarios', active: false },
  ]

  return (
    <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Browser frame */}
      <rect width="500" height="300" rx="10" fill="#1e1e1e" />

      {/* Chrome bar */}
      <rect width="500" height="26" rx="10" fill="#2d2d2d" />
      <rect y="16" width="500" height="10" fill="#2d2d2d" />
      {/* Dots */}
      <circle cx="16" cy="13" r="4.5" fill="#ff5f57" />
      <circle cx="29" cy="13" r="4.5" fill="#febc2e" />
      <circle cx="42" cy="13" r="4.5" fill="#28c840" />
      {/* URL bar */}
      <rect x="58" y="8" width="240" height="11" rx="5" fill="#3a3a3a" />
      <rect x="66" y="12" width="60" height="3" rx="1.5" fill="#666" />

      {/* App container */}
      <rect x="0" y="26" width="500" height="274" fill={cream} />

      {/* Sidebar */}
      <rect x="0" y="26" width="80" height="274" fill={sidebar} />
      {/* Logo area */}
      <rect x="0" y="26" width="80" height="36" fill={card} />
      <line x1="0" y1="62" x2="80" y2="62" stroke={border} strokeWidth="1" />
      <rect x="12" y="37" width="56" height="14" rx="3" fill="#000" opacity="0.85" />
      <rect x="20" y="41" width="30" height="3" rx="1.5" fill={card} opacity="0.6" />
      <rect x="20" y="46" width="20" height="2" rx="1" fill={card} opacity="0.35" />

      {/* Nav items */}
      {navItems.map((item, i) => {
        const y = 72 + i * 26
        return (
          <g key={item.label}>
            {item.active && (
              <rect x="6" y={y - 1} width="68" height="20" rx="5" fill={gold} />
            )}
            {/* Icon placeholder */}
            <rect x="14" y={y + 4} width="10" height="10" rx="2.5"
              fill={item.active ? '#7a5c20' : textDim} opacity={item.active ? 0.7 : 0.5} />
            {/* Label */}
            <rect x="30" y={y + 6} width={item.active ? 36 : 32} height="6" rx="2"
              fill={item.active ? '#5a3e10' : muted} opacity={item.active ? 0.6 : 0.35} />
          </g>
        )
      })}

      {/* Topbar */}
      <rect x="80" y="26" width="420" height="34" fill={card} />
      <line x1="80" y1="60" x2="500" y2="60" stroke={border} strokeWidth="1" />
      {/* Search bar */}
      <rect x="92" y="35" width="130" height="16" rx="4" fill={cream} stroke={border} strokeWidth="1" />
      <rect x="102" y="40" width="60" height="5" rx="2" fill={textDim} opacity="0.4" />
      {/* Icons */}
      <circle cx="438" cy="43" r="7" fill={cream} stroke={border} strokeWidth="1" />
      <rect cx="438" cy="43" x="434" y="40" width="8" height="6" rx="1" fill={textDim} opacity="0.5" />
      {/* Avatar */}
      <circle cx="462" cy="43" r="10" fill={gold} opacity="0.8" />
      <circle cx="462" cy="40" r="4" fill={card} opacity="0.7" />
      <ellipse cx="462" cy="50" rx="6" ry="4" fill={card} opacity="0.7" />

      {/* KPI Cards row */}
      {[
        { label: 'Clientes', val: '248', color: '#000' },
        { label: 'Ventas', val: '34', color: gold },
        { label: 'Pólizas', val: '187', color: '#000' },
        { label: 'Casos', val: '12', color: '#c0392b' },
      ].map((kpi, i) => {
        const x = 92 + i * 100
        return (
          <g key={kpi.label}>
            <rect x={x} y="70" width="88" height="50" rx="6" fill={card}
              stroke={border} strokeWidth="1" />
            <rect x={x + 10} y="79" width="40" height="6" rx="2" fill={muted} opacity="0.4" />
            <rect x={x + 10} y="91" width="28" height="12" rx="3" fill={kpi.color} opacity="0.8" />
            <rect x={x + 44} y="91" width="20" height="4" rx="2"
              fill={kpi.color === gold ? gold : '#b8a79c'} opacity="0.4" />
          </g>
        )
      })}

      {/* Table */}
      <rect x="92" y="132" width="396" height="140" rx="6" fill={card}
        stroke={border} strokeWidth="1" />
      {/* Table header */}
      <rect x="92" y="132" width="396" height="22" rx="6" fill={cream} />
      <rect x="92" y="148" width="396" height="6" fill={cream} />
      {['Nombre', 'Tipo', 'Estado', 'Teléfono', 'Acciones'].map((col, i) => (
        <rect key={col} x={104 + i * 76} y="139" width={col === 'Nombre' ? 50 : 40}
          height="5" rx="2" fill={muted} opacity="0.45" />
      ))}
      {/* Table rows */}
      {[0, 1, 2, 3].map(row => {
        const y = 162 + row * 26
        return (
          <g key={row}>
            <line x1="92" y1={y + 24} x2="488" y2={y + 24} stroke={border} strokeWidth="0.5" />
            {/* Name */}
            <circle cx="108" cy={y + 10} r="7" fill={textDim} opacity="0.4" />
            <rect x="120" y={y + 7} width="44" height="5" rx="2" fill="#000" opacity="0.45" />
            <rect x="120" y={y + 14} width="28" height="3" rx="1.5" fill={muted} opacity="0.3" />
            {/* Type badge */}
            <rect x="192" y={y + 6} width="34" height="12" rx="3" fill={cream}
              stroke={border} strokeWidth="0.5" />
            <rect x="197" y={y + 10} width="24" height="3" rx="1.5" fill={muted} opacity="0.4" />
            {/* Status badge */}
            <rect x="270" y={y + 6} width="36" height="12" rx="3"
              fill={row === 0 ? 'rgba(40,180,80,0.12)' : 'rgba(210,184,122,0.2)'}
              stroke={row === 0 ? 'rgba(40,180,80,0.3)' : 'rgba(210,184,122,0.4)'}
              strokeWidth="0.5" />
            <rect x="276" y={y + 10} width="24" height="3" rx="1.5"
              fill={row === 0 ? '#28b450' : gold} opacity="0.6" />
            {/* Phone */}
            <rect x="350" y={y + 9} width="50" height="3" rx="1.5" fill={muted} opacity="0.3" />
            {/* Action dots */}
            {[0, 1, 2].map(d => (
              <circle key={d} cx={452 + d * 8} cy={y + 11} r="2" fill={textDim} opacity="0.5" />
            ))}
          </g>
        )
      })}
    </svg>
  )
}

/* ─── Nutrition Dashboard Mockup ─────────────────────────────────────────── */
export function NutritionDashboardMockup() {
  const bg = '#E3EEE4'
  const sidebarBg = '#656176'
  const green = '#69956D'
  const orange = '#D98D1C'
  const card = '#ffffff'
  const border = 'rgba(0,0,0,0.08)'
  const textMuted = '#8F8BA5'

  const navItems = ['Dashboard', 'Pacientes', 'Herramientas']

  const stats = [
    { label: 'Pacientes', val: '42', color: green, icon: green },
    { label: 'Nuevos', val: '8', color: orange, icon: orange },
    { label: 'Sesiones', val: '127', color: '#7c6af5', icon: '#7c6af5' },
    { label: 'Alertas', val: '3', color: '#dc2626', icon: '#dc2626' },
  ]

  return (
    <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Browser frame */}
      <rect width="500" height="300" rx="10" fill="#1e1e1e" />
      <rect width="500" height="26" rx="10" fill="#2d2d2d" />
      <rect y="16" width="500" height="10" fill="#2d2d2d" />
      <circle cx="16" cy="13" r="4.5" fill="#ff5f57" />
      <circle cx="29" cy="13" r="4.5" fill="#febc2e" />
      <circle cx="42" cy="13" r="4.5" fill="#28c840" />
      <rect x="58" y="8" width="240" height="11" rx="5" fill="#3a3a3a" />
      <rect x="66" y="12" width="70" height="3" rx="1.5" fill="#666" />

      {/* App */}
      <rect x="0" y="26" width="500" height="274" fill={bg} />

      {/* Sidebar */}
      <rect x="0" y="26" width="78" height="274" fill={sidebarBg} />
      {/* Logo */}
      <rect x="0" y="26" width="78" height="36" fill={sidebarBg} />
      <rect x="12" y="33" width="24" height="24" rx="4" fill={green} />
      <rect x="16" y="40" width="10" height="3" rx="1.5" fill={card} opacity="0.9" />
      <rect x="16" y="45" width="16" height="2" rx="1" fill={card} opacity="0.5" />
      <rect x="41" y="38" width="28" height="5" rx="2" fill={card} opacity="0.7" />
      <rect x="41" y="46" width="22" height="3" rx="1.5" fill={card} opacity="0.35" />

      {/* Nav items */}
      {navItems.map((item, i) => {
        const y = 76 + i * 30
        const active = i === 0
        return (
          <g key={item}>
            {active && (
              <rect x="6" y={y - 2} width="66" height="22" rx="5" fill={green} />
            )}
            <rect x="14" y={y + 4} width="10" height="10" rx="2.5"
              fill={card} opacity={active ? 0.9 : 0.3} />
            <rect x="28" y={y + 6} width={active ? 36 : 32} height="6" rx="2"
              fill={card} opacity={active ? 0.85 : 0.4} />
          </g>
        )
      })}

      {/* Logout at bottom */}
      <rect x="14" y="270" width="10" height="10" rx="2" fill={card} opacity="0.2" />
      <rect x="28" y="272" width="28" height="5" rx="2" fill={card} opacity="0.2" />

      {/* Header */}
      <rect x="78" y="26" width="422" height="36" fill={card} />
      <line x1="78" y1="62" x2="500" y2="62" stroke={border} strokeWidth="1" />
      <rect x="90" y="34" width="80" height="8" rx="3" fill="#000" opacity="0.7" />
      <rect x="90" y="44" width="120" height="5" rx="2" fill={textMuted} opacity="0.5" />
      {/* Bell */}
      <circle cx="456" cy="44" r="8" fill={bg} stroke={border} strokeWidth="1" />
      <rect x="452" y="40" width="8" height="7" rx="2" fill={textMuted} opacity="0.5" />
      <circle cx="462" cy="39" r="3" fill="#dc2626" />
      {/* Date */}
      <rect x="472" y="40" width="20" height="5" rx="2" fill={textMuted} opacity="0.3" />

      {/* Stats grid */}
      {stats.map((stat, i) => {
        const x = 90 + i * 104
        return (
          <g key={stat.label}>
            <rect x={x} y="72" width="94" height="52" rx="8" fill={card}
              stroke={border} strokeWidth="1" />
            {/* Icon */}
            <rect x={x + 8} y="82" width="16" height="16" rx="4"
              fill={stat.color} opacity="0.15" />
            <rect x={x + 12} y="87" width="8" height="6" rx="1.5"
              fill={stat.color} opacity="0.7" />
            {/* Value */}
            <rect x={x + 32} y="82" width="28" height="12" rx="3"
              fill="#000" opacity="0.75" />
            {/* Label */}
            <rect x={x + 32} y="98" width="40" height="5" rx="2"
              fill={textMuted} opacity="0.5" />
            {/* Trend */}
            <rect x={x + 72} y="84" width="14" height="5" rx="2"
              fill={stat.color} opacity="0.5" />
          </g>
        )
      })}

      {/* Content area: patient list + chart */}
      <rect x="90" y="136" width="216" height="140" rx="8" fill={card}
        stroke={border} strokeWidth="1" />
      <rect x="90" y="136" width="216" height="26" rx="8" fill={card} />
      <rect x="90" y="156" width="216" height="6" fill={card} />
      <rect x="100" y="143" width="70" height="7" rx="3" fill="#000" opacity="0.6" />
      <rect x="270" y="143" width="28" height="8" rx="4" fill={green} opacity="0.8" />

      {/* Patient rows */}
      {[0, 1, 2, 3, 4].map(i => {
        const y = 168 + i * 21
        return (
          <g key={i}>
            <circle cx="106" cy={y + 7} r="7" fill={textMuted} opacity="0.25" />
            <rect x="118" y={y + 2} width="50" height="6" rx="2" fill="#000" opacity="0.5" />
            <rect x="118" y={y + 10} width="36" height="4" rx="2" fill={textMuted} opacity="0.35" />
            <rect x="220" y={y + 3} width="28" height="10" rx="3"
              fill={i % 3 === 0 ? 'rgba(105,149,109,0.15)' : i % 3 === 1 ? 'rgba(217,141,28,0.15)' : 'rgba(124,106,245,0.15)'}
              stroke={i % 3 === 0 ? 'rgba(105,149,109,0.4)' : i % 3 === 1 ? 'rgba(217,141,28,0.4)' : 'rgba(124,106,245,0.4)'}
              strokeWidth="0.5" />
            {i < 4 && <line x1="100" y1={y + 19} x2="298" y2={y + 19}
              stroke={border} strokeWidth="0.5" />}
          </g>
        )
      })}

      {/* Chart area */}
      <rect x="316" y="136" width="172" height="140" rx="8" fill={card}
        stroke={border} strokeWidth="1" />
      <rect x="326" y="145" width="80" height="7" rx="3" fill="#000" opacity="0.6" />
      {/* Chart bars */}
      {[40, 65, 50, 80, 55, 70, 45].map((h, i) => (
        <rect key={i} x={326 + i * 22} y={270 - h} width="14" height={h}
          rx="3" fill={green} opacity={i === 3 ? 0.9 : 0.4} />
      ))}
      {/* X axis */}
      <line x1="320" y1="272" x2="484" y2="272" stroke={border} strokeWidth="1" />
      {/* Y grid lines */}
      {[0, 1, 2].map(i => (
        <line key={i} x1="320" y1={248 - i * 30} x2="484" y2={248 - i * 30}
          stroke={border} strokeWidth="0.5" strokeDasharray="4 3" />
      ))}
    </svg>
  )
}

/* ─── Nutrition App Mockup (Mobile) ──────────────────────────────────────── */
export function NutritionAppMockup() {
  const bg = '#E3EEE4'
  const green = '#69956D'
  const orange = '#D98D1C'
  const card = '#ffffff'
  const border = 'rgba(0,0,0,0.08)'
  const textMuted = '#8F8BA5'
  const dark = '#656176'

  const categories = [
    { label: 'Funciones GI', color: green, items: ['Sin síntomas', 'Tránsito: normal', 'pH: 6.8'] },
    { label: 'Biorritmo', color: orange, items: ['Sueño: 7h 30m', 'Energía: alta', 'Cronotipo: am'] },
    { label: 'Datos Clínicos', color: dark, items: ['Glucosa: 88', 'Tensión: 118/74', 'FC: 62 bpm'] },
  ]

  const tabs = ['⚖️', '🥗', '🏃', '📖', '💪', '⚡']

  return (
    <svg viewBox="0 0 260 500" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Phone frame */}
      <rect width="260" height="500" rx="36" fill="#1a1a1a" />
      <rect x="8" y="8" width="244" height="484" rx="30" fill={bg} />

      {/* Status bar */}
      <rect x="8" y="8" width="244" height="28" rx="30" fill={bg} />
      <rect x="8" y="28" width="244" height="8" fill={bg} />
      <rect x="20" y="14" width="20" height="7" rx="2" fill={dark} opacity="0.35" />
      {/* Notch */}
      <rect x="100" y="10" width="60" height="14" rx="7" fill="#1a1a1a" />
      {/* Battery */}
      <rect x="220" y="15" width="22" height="9" rx="2" fill="none" stroke={dark} strokeWidth="1.2" opacity="0.5" />
      <rect x="222" y="17" width="16" height="5" rx="1" fill={green} opacity="0.5" />

      {/* App header */}
      <rect x="8" y="36" width="244" height="44" fill={green} />
      <rect x="20" y="50" width="80" height="9" rx="3" fill={card} opacity="0.9" />
      <rect x="20" y="62" width="55" height="5" rx="2" fill={card} opacity="0.5" />
      {/* Header icons */}
      <circle cx="220" cy="58" r="12" fill="rgba(255,255,255,0.15)" />
      <rect x="214" y="53" width="12" height="10" rx="2" fill={card} opacity="0.7" />

      {/* Synthesis chart area */}
      <rect x="16" y="88" width="228" height="70" rx="10" fill={card} stroke={border} strokeWidth="1" />
      <rect x="26" y="97" width="70" height="7" rx="3" fill="#000" opacity="0.6" />
      {/* Radial chart placeholder */}
      <circle cx="190" cy="123" r="28" fill="none" stroke={green} strokeWidth="2" opacity="0.2" />
      <circle cx="190" cy="123" r="22" fill="none" stroke={orange} strokeWidth="2" opacity="0.2" />
      <circle cx="190" cy="123" r="15" fill="none" stroke={dark} strokeWidth="2" opacity="0.2" />
      <path d="M190 95 A28 28 0 0 1 218 123" fill="none" stroke={green} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M190 101 A22 22 0 0 1 207 108" fill="none" stroke={orange} strokeWidth="3" strokeLinecap="round" />
      {/* Mini bars */}
      {[0, 1, 2, 3].map(i => (
        <rect key={i} x={30 + i * 22} y={140 - (i === 2 ? 28 : i === 1 ? 20 : i === 3 ? 16 : 24)}
          width="14" height={i === 2 ? 28 : i === 1 ? 20 : i === 3 ? 16 : 24}
          rx="4" fill={green} opacity={i === 2 ? 0.85 : 0.35} />
      ))}
      <rect x="26" y="146" width="80" height="4" rx="2" fill={textMuted} opacity="0.3" />

      {/* Category cards */}
      {categories.map((cat, i) => {
        const y = 168 + i * 82
        return (
          <g key={cat.label}>
            <rect x="16" y={y} width="228" height="74" rx="10" fill={card}
              stroke={border} strokeWidth="1" />
            {/* Left accent */}
            <rect x="16" y={y} width="4" height="74" rx="2" fill={cat.color} opacity="0.8" />
            {/* Title */}
            <rect x="28" y={y + 12} width="90" height="7" rx="3"
              fill={cat.color} opacity="0.7" />
            {/* Items */}
            {cat.items.map((item, j) => (
              <g key={item}>
                <circle cx="32" cy={y + 32 + j * 14} r="2.5"
                  fill={cat.color} opacity="0.5" />
                <rect x="38" y={y + 28 + j * 14} width={j === 1 ? 75 : j === 2 ? 68 : 55}
                  height="6" rx="2" fill="#000" opacity="0.4" />
              </g>
            ))}
          </g>
        )
      })}

      {/* Bottom tab bar */}
      <rect x="8" y="440" width="244" height="52" rx="0" fill={card} />
      <rect x="8" y="484" width="244" height="8" rx="30" fill={card} />
      <line x1="8" y1="440" x2="252" y2="440" stroke={border} strokeWidth="1" />
      {tabs.map((tab, i) => {
        const x = 20 + i * 38
        const active = i === 0
        return (
          <g key={i}>
            <rect x={x} y="449" width="26" height="26" rx="6"
              fill={active ? green : 'transparent'} opacity={active ? 0.12 : 1} />
            <text x={x + 13} y="467" textAnchor="middle" fontSize="16">{tab}</text>
            {active && (
              <rect x={x + 8} y="476" width="10" height="3" rx="1.5" fill={green} />
            )}
          </g>
        )
      })}
      {/* Home indicator */}
      <rect x="100" y="490" width="60" height="4" rx="2" fill="#000" opacity="0.15" />
    </svg>
  )
}
