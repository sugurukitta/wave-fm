import { useState } from 'react'
import './ContactPage.css'

const CONTACT_ITEMS = [
  { icon: '🎙️', label: '番組へのご感想・メッセージ' },
  { icon: '💡', label: 'トピックのご提案' },
  { icon: '🤝', label: 'コラボ・出演のご依頼' },
  { icon: '📣', label: 'スポンサー・PR のご相談' },
  { icon: '❓', label: 'その他のお問い合わせ' },
]

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', category: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'お名前を入力してください'
    if (!form.email.trim()) e.email = 'メールアドレスを入力してください'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = '正しいメールアドレスを入力してください'
    if (!form.message.trim()) e.message = 'メッセージを入力してください'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    const subject = encodeURIComponent(
      `[ガジュマルのさんぽ お問い合わせ]${form.category ? ` ${form.category}` : ''}`
    )
    const body = encodeURIComponent(
      `お名前: ${form.name}\nメールアドレス: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:gajumarunosampo@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="contact-page">
        <div className="contact-inner">
          <div className="contact-success">
            <div className="contact-success-icon">✉️</div>
            <h2>メールクライアントが開きました</h2>
            <p>メールアプリが開かない場合は、直接 <strong>gajumarunosampo@gmail.com</strong> までご連絡ください。</p>
            <button className="contact-back-btn" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', category: '', message: '' }) }}>
              フォームに戻る
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="contact-page">
      <div className="contact-inner">

        <div className="contact-header">
          <span className="page-tag">CONTACT</span>
          <h1>お問い合わせ</h1>
          <p>番組へのご感想やご意見、ご相談などお気軽にどうぞ。</p>
        </div>

        <div className="contact-layout">

          {/* 左カラム：受付内容 */}
          <div className="contact-categories">
            <h3>受け付けているご連絡</h3>
            <ul>
              {CONTACT_ITEMS.map((item) => (
                <li key={item.label}>
                  <span>{item.icon}</span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* 右カラム：フォーム */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>

            <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
              <label htmlFor="name">お名前 <span className="required">*</span></label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="山田 太郎"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <p className="form-error">{errors.name}</p>}
            </div>

            <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
              <label htmlFor="email">メールアドレス <span className="required">*</span></label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <p className="form-error">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="category">お問い合わせの種類</label>
              <select
                id="category"
                name="category"
                value={form.category}
                onChange={handleChange}
              >
                <option value="">選択してください（任意）</option>
                {CONTACT_ITEMS.map((item) => (
                  <option key={item.label} value={item.label}>{item.label}</option>
                ))}
              </select>
            </div>

            <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
              <label htmlFor="message">メッセージ <span className="required">*</span></label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="メッセージをご入力ください..."
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && <p className="form-error">{errors.message}</p>}
            </div>

            <button type="submit" className="contact-submit-btn">
              送信する →
            </button>

            <p className="contact-note">
              ※ 送信ボタンを押すとメールアプリが開きます。
            </p>

          </form>
        </div>

      </div>
    </div>
  )
}

export default ContactPage
