import icon from '../assets/icon.png'
import './AboutPage.css'

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-page-inner">

        {/* ヒーロー */}
        <div className="about-hero">
          <div className="about-hero-img">
            <img src={icon} alt="ガジュマルのさんぽ" />
          </div>
          <div className="about-hero-text">
            <span className="page-tag">ABOUT</span>
            <h1>番組について</h1>
            <p className="about-lead">
              「ガジュマルのさんぽ」は、音楽とデジタル音声の世界を<br />
              のんびりと歩き回るラジオ番組です。
            </p>
          </div>
        </div>

        {/* タイトルの由来 */}
        <section className="about-section">
          <div className="about-section-label">
            <span className="section-num">01</span>
            <span className="section-tag-text">タイトルへの想い</span>
          </div>
          <div className="about-section-body">
            <h2>なぜ「ガジュマルのさんぽ」？</h2>
            <div className="about-text-block">
              <p>
                番組名を考えていたとき、一番最初に浮かんだのは「のんびりしたい」という気持ちでした。
                世の中にはたくさんのラジオや音声コンテンツがあって、
                どれも情報が濃くて刺激的。もちろんそれは素晴らしいことなのですが、
                私たちは少し違うものを作りたいと思っていました。
              </p>
              <p>
                ガジュマルの木は、沖縄や南の島でよく見かける大きな木です。
                複雑に絡み合った根を持ち、どっしりと地に足をつけて立っている。
                木陰は涼しくて、自然とそこに人が集まってくる。
                そんな「場所」のようなラジオにしたいという想いが、この名前に込められています。
              </p>
              <p>
                「さんぽ」という言葉は、目的地を決めずにぶらぶら歩くイメージ。
                音楽の話をしていたらいつの間にか映画の話になっていたり、
                テクノロジーの話から人生観まで話が広がっていたり。
                そんな自由で気ままな会話を、リスナーの皆さんにも楽しんでほしいと思っています。
              </p>
            </div>
          </div>
        </section>

        {/* 番組の始まり */}
        <section className="about-section">
          <div className="about-section-label">
            <span className="section-num">02</span>
            <span className="section-tag-text">番組の始まり</span>
          </div>
          <div className="about-section-body">
            <h2>どうして始めたのか</h2>
            <div className="about-text-block">
              <p>
                きっかけは、3人が偶然同じ音楽フェスに行ったことでした。
                帰り道の電車の中で、その日見たアーティストの話をしながら、
                「こういう話をもっとたくさんの人と共有したいよね」という話になって。
              </p>
              <p>
                「じゃあポッドキャストでも始めてみる？」という軽い一言が、
                この番組の始まりでした。最初はスマホのボイスメモで録音して、
                機材も何もない状態でのスタート。音質もひどくて、第1回目を聴き返したら
                3人で大笑いしました。
              </p>
              <p>
                それでも毎週配信を続けていくうちに、少しずつリスナーが増えて、
                「この番組聴いてます」という声が届くようになりました。
                機材も少しずつ揃えて、今の形になっています。
                あの電車の中でのたった一言が、こんなに長く続くとは思っていませんでした。
              </p>
            </div>
          </div>
        </section>

        {/* 番組のこだわり */}
        <section className="about-section">
          <div className="about-section-label">
            <span className="section-num">03</span>
            <span className="section-tag-text">番組のこだわり</span>
          </div>
          <div className="about-section-body">
            <h2>大切にしていること</h2>
            <div className="about-values-grid">
              {[
                {
                  icon: '🌿',
                  title: 'のんびりした空気感',
                  desc: '急がない、焦らない。コーヒーを飲みながら友達と話しているような、リラックスした雰囲気を大切にしています。',
                },
                {
                  icon: '🎵',
                  title: '音楽への純粋な愛',
                  desc: 'ジャンルや時代にこだわらず、「いいな」と思った音楽を素直に語ります。難しい音楽理論より、聴いたときの感動を大切に。',
                },
                {
                  icon: '🤝',
                  title: 'リスナーとの距離感',
                  desc: '毎回リスナーからのお便りを紹介するコーナーを設けています。皆さんの感想や思い出が、番組を作っています。',
                },
                {
                  icon: '📡',
                  title: '毎週欠かさず',
                  desc: '月曜のショートニュースと木曜のロングトーク。どちらも欠かさず届けることが、私たちの約束です。',
                },
              ].map((v) => (
                <div className="about-value-card" key={v.title}>
                  <span className="value-icon">{v.icon}</span>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 番組情報 */}
        <section className="about-section">
          <div className="about-section-label">
            <span className="section-num">04</span>
            <span className="section-tag-text">番組情報</span>
          </div>
          <div className="about-section-body">
            <h2>基本情報</h2>
            <div className="about-info-table">
              {[
                { label: '番組名', value: 'ガジュマルのさんぽ' },
                { label: '配信頻度', value: '毎週月曜（ショートニュース）・毎週木曜（ロングトーク）' },
                { label: '配信開始', value: '2023年4月' },
                { label: 'パーソナリティ', value: '田中 翔 / 山田 花 / 鈴木 一郎' },
                { label: '配信プラットフォーム', value: 'Spotify / Apple Podcasts / YouTube / Amazon Music' },
                { label: 'お便り・ご感想', value: '#ガジュマルのさんぽ でSNSに投稿してください！' },
              ].map((row) => (
                <div className="info-row" key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default AboutPage
