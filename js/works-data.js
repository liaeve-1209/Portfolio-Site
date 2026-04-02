/**
 * works-data.js
 * 全作品データ。文字情報.md の内容をもとに日本語で記述。
 *
 * category の値はフィルターキーと対応:
 *   "game" / "3dcg" / "animation" / "film" / "art" / "other"
 */

const WORKS = [
  {
    id: "i-lost-my-faith",
    number: "I",
    title: "i lost my faith",
    subtitle: "ゲーム制作",
    tagline: "「ゲーム制作」を一から全部自分でできるようにする",
    videoId: "Kp2IDDrD_18",
    category: "game",
    categoryLabel: "Game / Interactive",
    tools: ["Unreal Engine 5", "Blender", "Cinema4D", "After Effects", "Clip Studio", "Logix Pro", "Stable Diffusion", "Tripo"],
    year: "2024–2025",
    duration: "2024年6月〜2025年2月（8ヵ月）",
    type: "個人制作・卒業制作",
    description: [
      "「シュルレアリスム」をテーマにしたゲーム作品。企画・モデリング・プログラミング・音楽・アニメーションなど全ての制作を一人で行った。",
      "プレイヤーは前を歩く女性キャラクターをひたすら追いかけながら、シュルレアリスム的な精神の世界へと迷い込んでいく。映像とゲームの中間点となるような作品を目指した。",
      "背景はBlenderでモデリングしUE5でゲームに仕上げた。全レベルをBlueprintで設計し、プレイヤーの行動に合わせてリアルタイムで変化するステージデザインを実装した。"
    ],
    thumbnail: "assets/works/i-lost-my-faith/01.jpg",
    images: [
      "assets/works/i-lost-my-faith/01.jpg",
      "assets/works/i-lost-my-faith/02.jpg",
      "assets/works/i-lost-my-faith/03.jpg",
      "assets/works/i-lost-my-faith/04.jpg",
      "assets/works/i-lost-my-faith/05.jpg"
    ],
    colors: {
      '--color-bg': '#0c0a14',
      '--color-text': '#e8e4f8',
      '--color-text-muted': '#9f96d8',
      '--color-border': '#201c38',
      '--color-placeholder': '#181428',
      '--color-placeholder-dark': '#241e3a',
      '--color-active-bg': '#e8e4f8',
      '--color-active-text': '#0c0a14',
      '--color-accent': '#b5aef0',
      '--color-accent-2': '#f67497'
    },
    process: [
      {
        heading: "制作背景 / コンセプト",
        body: "「シュルレアリスム」をテーマにしたゲーム作品で、企画・モデリング・プログラミング・音楽・アニメーション制作など全ての制作を一人で行った。ゲーム自体はシンプルで、プレイヤーは前を歩く女性のキャラクターをひたすら追いかける。その中でシュルレアリスム的な精神の世界に迷い込んでいくという内容で、映像とゲームの中間点となるような作品を目指して制作した。",
        images: [
          "assets/works/i-lost-my-faith/09.jpg",
          "assets/works/i-lost-my-faith/10.jpg",
          "assets/works/i-lost-my-faith/11.jpg"
        ]
      },
      {
        heading: "UE5 レベルデザイン",
        body: "背景を全てBlenderでモデリングし、UnrealEngine5でゲームにした。レベルごとに世界観が異なるように意識してモデリング。直線を多用したレベルは人工的な印象を強め、曲線を多用したレベルは幻想的な世界観を表現した。プレイヤーが進むにつれてステージが変化するような設計を全てBlueprintで実装し、「他では感じたことがないような体験をした」という感想をもらえた。",
        naturalHeight: true,
        columns: 2,
        images: [
          "assets/works/i-lost-my-faith/13.jpg",
          "assets/works/i-lost-my-faith/14.jpg",
          "assets/works/i-lost-my-faith/15.jpg",
          "assets/works/i-lost-my-faith/16.jpg"
        ]
      },
      {
        heading: "ゲームデザイン ❶ — プレイヤー / サブキャラクター",
        body: "プレイヤーの前を歩き続ける女性を追いかけるという点が今作の核。レベルにスプラインを設置し、そのスプライン上を動くアクターをAI Controllerで追いかけ続けるキャラクターを実装することで、まるでプレイヤーの前を歩いているかのように見せた。キャラクターはStable DiffusionとTripoで3D生成し、デフォルトのマネキンにリターゲットして実装。Behavior TreeとBlackboardを組み合わせて制御した。",
        images: [
          "assets/works/i-lost-my-faith/19.jpg",
          "assets/works/i-lost-my-faith/20.jpg",
          "assets/works/i-lost-my-faith/21.jpg"
        ]
      },
      {
        heading: "ゲームデザイン ❷ — NPC / UI",
        body: "各レベルに異なる世界観のNPCを配置し、すれ違うと会話が表示される仕組みをデータテーブル＋接触判定トリガーで実装。アニメーションはBlenderで制作しFBXでインポート。UIはゲーム未経験者でも直感的に操作できるよう意識してデザインした。レベル遷移時のローディング画面も自作アニメーションをWidgetで再生し、没入感を維持する設計にした。",
        images: [
          "assets/works/i-lost-my-faith/17.jpg",
          "assets/works/i-lost-my-faith/18.jpg"
        ]
      }
    ]
  },
  {
    id: "poor-things",
    number: "II",
    title: "Poor Things",
    subtitle: "3DCG背景モデル",
    tagline: "「有機的な世界観」に合わせた\n CG背景モデルを作成",
    category: "3dcg",
    categoryLabel: "3DCG",
    tools: ["Blender", "Substance Painter", "Unreal Engine 5", "After Effects"],
    year: "2025",
    duration: "2025年10月〜12月（2ヶ月・300時間）",
    type: "個人制作",
    polygons: "△834,002",
    description: [
      "ヨルゴス・ランティモス監督の映画『哀れなるものたち』の背景美術に心を惹かれ、その世界観を3DCGで再現することに挑戦した作品。商業利用も可能なレベルのクオリティを目標とした。",
      "Substance Painterを使い、建物独自の汚れや質感を手描きで足したテクスチャを制作。UE5でライティングとレンダリングを行い、マルチパスレンダリングでコンポジットした。",
      "「不思議な街の奥へと引き込まれるような画作り」を目指し、画面奥へと視線が向かう構図を意識した。"
    ],
    thumbnail: "assets/works/Poor-Things/01.jpg",
    images: [
      "assets/works/Poor-Things/01.jpg",
      "assets/works/Poor-Things/02.jpg"
    ],
    colors: {
      '--color-bg': '#f2ece0',
      '--color-text': '#2a1906',
      '--color-text-muted': '#6a5840',
      '--color-border': '#d4c8b0',
      '--color-placeholder': '#e4dcc8',
      '--color-placeholder-dark': '#c8bca4',
      '--color-active-bg': '#1a1208',
      '--color-active-text': '#f2ece0',
      '--color-accent': '#c4824a',
      '--color-accent-2': '#492315'
    },
    process: [
      {
        heading: "制作背景 / コンセプト",
        body: "ヨルゴス・ランティモス監督の映画『哀れなるものたち』の背景美術に心を惹かれ、その1920年代の退廃的な街の世界観を3DCGで再現することに挑戦した。商業利用も可能なレベルのクオリティを目標に、細かいところまで丁寧に制作。不思議な街の奥へと引き込まれるような画作りを目指し、画面奥へと視線が向かう構図を意識した。",
        images: [
          "assets/works/Poor-Things/03.jpg",
          "assets/works/Poor-Things/04.jpg",
          "assets/works/Poor-Things/05.jpg",
          "assets/works/Poor-Things/06.jpg"
        ]
      },
      {
        heading: "Substance Painter を用いたテクスチャリング",
        body: "Substance Painterを使い、その建物独自の汚れや質感を手描きで足したテクスチャを制作。マテリアルインスタンスで作ることで、質感の調整をパラメーターで細かく設定できるようにした。リファレンスを参考にベースのテクスチャを設定した後、汚れや質感をブラシで手描きして足していく工程を繰り返した。",
        images: [
          "assets/works/Poor-Things/10.jpg",
          "assets/works/Poor-Things/11.jpg"
        ]
      },
      {
        heading: "「実在感」を意識したブラッシュアップ",
        body: "制作途中の課題として「テクスチャのスケールが大きい」「反復感が気になる」「ベベルがないため角ばって見える」「テクスチャのラフネスが全て等しいため実在感に欠ける」などを洗い出し、人型モデルでスケール感の基準を作りながら一つひとつ修正。ライティングの問題で色が潰れている箇所も調整した。",
        images: [
          "assets/works/Poor-Things/03.jpg",
          "assets/works/Poor-Things/04.jpg",
          "assets/works/Poor-Things/05.jpg",
          "assets/works/Poor-Things/06.jpg"
        ]
      },
      {
        heading: "ライティングとレンダリング",
        body: "環境光だけでは露出が潰れてしまう箇所が多かったため、ポイントライトを使って光の方向性に矛盾がないよう丁寧にライティング。UE5からEXR形式でレンダリングし、After Effectsでマルチパスコンポジットを実施。AEでEXRが上手く開けない問題も各種サイトを調べることで解決し、空間感を強調するコンポジットに仕上げた。",
        images: [
          "assets/works/Poor-Things/07.jpg",
          "assets/works/Poor-Things/08.jpg",
          "assets/works/Poor-Things/09.jpg"
        ]
      }
    ]
  },
  {
    id: "a-room-connects-fantasy-and-reality",
    number: "III",
    title: "A Room Connects Fantasy and Reality",
    subtitle: "3DCG室内モデル",
    tagline: "「想像力」と「現実」がつながる場所を\n テーマに室内空間を作成",
    category: "3dcg",
    categoryLabel: "3DCG",
    tools: ["Blender", "Substance Painter", "Photoshop"],
    year: "2025",
    duration: "2025年7月〜9月（2ヶ月・300時間）",
    type: "個人制作",
    polygons: "△279,602",
    description: [
      "「想像力と現実がつながる場所」をテーマに制作した室内空間。ダーク調のファンタジー書斎で、照明・マテリアル・小道具の配置にこだわった。",
      "テクスチャワークはSubstance Painterを使用。ガラス類はBlenderのシェーダーで透明感と凹凸感をノードで調整。レンダリングはBlender Cyclesで実施した。",
      "素材ごとに異なる手法でテクスチャを設定し、質感の実在感にこだわって制作した。"
    ],
    thumbnail: "assets/works/A-Room-Connects-Fantasy-and-Reality/01.jpg",
    images: [
      "assets/works/A-Room-Connects-Fantasy-and-Reality/01.jpg",
      "assets/works/A-Room-Connects-Fantasy-and-Reality/02.jpg",
      "assets/works/A-Room-Connects-Fantasy-and-Reality/03.jpg"
    ],
    colors: {
      '--color-bg': '#100c08',
      '--color-text': '#d9d1c4',
      '--color-text-muted': '#bba07d',
      '--color-border': '#241c14',
      '--color-placeholder': '#1c1410',
      '--color-placeholder-dark': '#281c14',
      '--color-active-bg': '#ddd0c0',
      '--color-active-text': '#100c08',
      '--color-accent': '#d4a870',
      '--color-accent-2': '#c2a763'
    },
    process: [
      {
        heading: "テクスチャワーク",
        body: "テクスチャワークはSubstance Painterで行った。室内のオブジェクトには詳細な模様をUVに直接投影する必要があり、素材ごとに異なる手法を選択した。コップや瓶などのガラス類はBlenderのシェーダーで制作し、透明感だけでなく凹凸感もノードで調整して実在感を追求した。",
        images: [
          "assets/works/A-Room-Connects-Fantasy-and-Reality/04.jpg",
          "assets/works/A-Room-Connects-Fantasy-and-Reality/05.jpg",
          "assets/works/A-Room-Connects-Fantasy-and-Reality/06.jpg",
        ]
      },
      {
        heading: "レンダリング",
        body: "レンダリングはBlenderのCyclesで実施した。Cyclesは緻密な計算を得意としフォトリアルな表現に強いが、レイトレーシングの計算に時間がかかるため静止画向きだった。各オブジェクトのポリゴン数はテーブルライト △4,408、地球儀 △14,708、椅子 △33,516、額縁 △47,100など、合計△279,602ポリゴンで構成した。",
        images: [
          "assets/works/A-Room-Connects-Fantasy-and-Reality/07.jpg",
          "assets/works/A-Room-Connects-Fantasy-and-Reality/08.jpg",
          "assets/works/A-Room-Connects-Fantasy-and-Reality/09.jpg",
        ]
      }
    ]
  },
  {
    id: "eigakousha-nanyougai",
    number: "IV",
    title: "映画公社南洋街",
    subtitle: "CGアニメーション",
    tagline: "CGを使って手描きの背景を\n奥行き感のある映像に",
    category: "animation",
    categoryLabel: "Animation（CG）",
    tools: ["Blender", "Clip Studio","Clip Studio"],
    year: "2025",
    duration: "2025年6月〜7月（2ヶ月・300時間）",
    type: "個人制作",
    description: [
      "手描きのイラストを3DCGでモデリングしたオブジェクトに投影することで、絵なのに奥行き感のある映像を作るという表現手法に挑戦した作品。",
      "Clip Studioでペイントした背景イラストをUV投影し、シェーダーを調整。Blenderで背景モデルを制作し、手描きテクスチャをマッピングすることで独特の質感を実現した。"
    ],
    thumbnail: "assets/works/映画公社南洋街/01.jpg",
    images: [
      "assets/works/映画公社南洋街/01.jpg",
      "assets/works/映画公社南洋街/02.jpg",
      "assets/works/映画公社南洋街/03.jpg",
    ],
    colors: {
      '--color-bg': '#0a0e16',
      '--color-text': '#c9c8e0',
      '--color-text-muted': '#6878a0',
      '--color-border': '#181e30',
      '--color-placeholder': '#121828',
      '--color-placeholder-dark': '#1c2238',
      '--color-active-bg': '#e0d8c8',
      '--color-active-text': '#0a0e16',
      '--color-accent': '#7aa0e0',
      '--color-accent-2': '#d9325e'
    },
    process: [
      {
        heading: "手描きイラストのUV投影",
        body: "手描きのイラストを3DCGでモデリングしたオブジェクトに投影することで、絵なのに奥行き感のある映像を作るという表現手法に挑戦した作品。❶Blenderで背景モデルを制作し、❷Clip Studioでペイントした背景イラストをUV投影。シェーダーを調整することで手描きテクスチャをマッピングし、独特の質感を実現した。",
        images: [

          "assets/works/映画公社南洋街/04.jpg",
          "assets/works/映画公社南洋街/05.jpg",
          "assets/works/映画公社南洋街/06.jpg",
          "assets/works/映画公社南洋街/07.jpg"
        ]
      }
    ]
  },
  {
    id: "hyper-urban",
    number: "V",
    title: "HYPER URBAN",
    subtitle: "3DCG映像制作",
    tagline: "3DCG映像で製品のコンセプトを伝える",
    category: "3dcg",
    categoryLabel: "3DCG",
    tools: ["Unreal Engine 5", "Blender","Premire Pro"],
    year: "2024",
    duration: "2024年1月〜2月（7日・50時間）",
    type: "インターン課題・個人制作",
    description: [
      "日産株式会社の長期インターンシップ（7日間）で制作した作品。指定のコンセプトカーをより魅力的に表現する映像を制作した。",
      "車のコンセプトである「洗練さ」と「快適さ」を表現するため、「洗練さ」には幾何形体、「快適さ」には緩やかな曲線を多用した空間デザインを行った。",
      "グリーンを基調とした照明と建築空間でラグジュアリーかつ都市的な世界観を演出した。"
    ],
    thumbnail: "assets/works/HYPER-URBAN/03.jpg",
    images: [
      "assets/works/HYPER-URBAN/01.jpg",
      "assets/works/HYPER-URBAN/02.jpg",
      "assets/works/HYPER-URBAN/03.jpg",
      "assets/works/HYPER-URBAN/04.jpg",
      "assets/works/HYPER-URBAN/05.jpg"
    ],
    colors: {
      '--color-bg': '#132b1e',
      '--color-text': '#ebffe7',
      '--color-text-muted': '#c3f6c9',
      '--color-border': '#0c1e0c',
      '--color-placeholder': '#081408',
      '--color-placeholder-dark': '#0e1e0e',
      '--color-active-bg': '#b8e0b0',
      '--color-active-text': '#040a04',
      '--color-accent': '#4dde80',
      '--color-accent-2': '#f2ffb4'
    },
    process: [
      {
        heading: "日産インターンシップ課題",
        body: "日産株式会社の長期インターンシップ（7日間）で制作した課題作品。「指定のコンセプトカーをより魅力的に表現する映像の制作」というテーマに対し、車のコンセプトである「洗練さ」と「快適さ」を空間デザインで表現した。「洗練さ」には幾何形体、「快適さ」には緩やかな曲線を多用し、グリーンを基調とした照明と建築空間でラグジュアリーかつ都市的な世界観を演出した。",
        images: [
          "assets/works/HYPER-URBAN/06.jpg",
          "assets/works/HYPER-URBAN/07.jpg"
        ]
      }
    ]
  },
  {
    id: "background-art",
    number: "VI",
    title: "背景美術",
    subtitle: "背景美術",
    tagline: "画面作りの基礎を徹底的に勉強する",
    category: "art",
    categoryLabel: "Illustration / Art",
    tools: ["Clip Studio"],
    year: "2025",
    duration: "2025年6月〜12月（1枚約12時間）",
    type: "個人制作",
    description: [
      "画面作りの基礎を徹底的に勉強するために制作した背景美術シリーズ。画面内の情報密度を意識して描いた。",
      "パースと面の意識を上げることを目的に、ディテールを入れる前の「面とグラデーションのみで空間を作る」ことを目指して制作した。絵を描く基礎から練習してきたことは自分の強みでもある。"
    ],
    thumbnail: "assets/works/背景美術/01.jpg",
    images: [
      "assets/works/背景美術/01.jpg",
      "assets/works/背景美術/02.jpg",
      "assets/works/背景美術/03.jpg"
    ],
    colors: {
      '--color-bg': '#eef2f6',
      '--color-text': '#141c28',
      '--color-text-muted': '#485870',
      '--color-border': '#d0dae6',
      '--color-placeholder': '#dce6f0',
      '--color-placeholder-dark': '#c4d0e0',
      '--color-active-bg': '#141c28',
      '--color-active-text': '#eef2f6',
      '--color-accent': '#4875a8',
      '--color-accent-2': '#346cc0'
    },
    process: [
      {
        heading: "「光」と「面」の意識を上げる",
        body: "画面作りの基礎を徹底的に勉強するために制作した背景美術シリーズ。画面内の情報密度を意識して描いた。パースと面の意識のレベルを上げるため、ディテールを入れる前の「面とグラデーションのみで空間を作る」ことを目指して制作した。絵を描く基礎から練習してきたことは自分の強みでもある。",
        naturalHeight: true,
        images: [,
          "assets/works/背景美術/04.jpg",
          "assets/works/背景美術/05.jpg"
        ]
      }
    ]
  },
  {
    id: "photo-study",
    number: "VII",
    title: "写真模写",
    subtitle: "写真模写",
    tagline: "「光源」と「構造」を重視して描いた",
    galleryLayout: "split-left",
    category: "art",
    categoryLabel: "Illustration / Art",
    tools: ["Clip Studio"],
    year: "2025",
    duration: "2025年6月〜12月（1枚約12時間）",
    type: "個人制作",
    description: [
      "「光源」と「構造」を重視して描いた写真模写シリーズ。",
      "パースと面の意識のレベルを上げるための練習作品。どちらもディテールを入れる前の、面とグラデーションのみで空間を作ることを目指して描いた。"
    ],
    thumbnail: "assets/works/写真模写/01.jpg",
    images: [
      "assets/works/写真模写/01.jpg",
      "assets/works/写真模写/02.jpg",
      "assets/works/写真模写/03.jpg"
    ],
    colors: {
      '--color-bg': '#fff5e5',
      '--color-text': '#322408',
      '--color-text-muted': '#706040',
      '--color-border': '#e4d8c0',
      '--color-placeholder': '#f0e4cc',
      '--color-placeholder-dark': '#d8c8a8',
      '--color-active-bg': '#201808',
      '--color-active-text': '#faf4ea',
      '--color-accent': '#a06840',
      '--color-accent-2': '#bc5b22'
    },
    process: [
      {
        heading: "「光源」と「構造」を重視した写真模写",
        body: "パースと面の意識のレベルを上げるために練習した写真模写シリーズ。どちらもディテールを入れる前の、面とグラデーションのみで空間を作ることを目指して描いた。「光源」がどこにあり、それが面にどう影響するかを常に意識しながら制作した。絵を描く基礎から練習してきたことは自分の強みでもある。",
        naturalHeight: true,
        images: [
          "assets/works/写真模写/04.jpg",
          "assets/works/写真模写/05.jpg"
        ]
      }
    ]
  },
  {
    id: "blue",
    number: "VIII",
    title: "Blue",
    subtitle: "アニメーション制作",
    tagline: "物語をアニメーションで伝える",
    category: "animation",
    categoryLabel: "Animation（2D）",
    tools: ["After Effects","Clip Studio", "Illustrator"],
    year: "2023",
    duration: "2023年8月〜10月（200時間・映像1分30秒）",
    type: "グループ制作（監督・背景・編集担当）",
    description: [
      "大学3年生の頃に友達と3人で制作した、オリジナルの2Dアニメーション作品（1分30秒）。物語をアニメーションで伝えることを目指した。",
      "ワークフロー：Clip Studioでラフを作成 → Illustratorで窓や小物の配置を決める → Clip Studioで遠近感が感じられるように彩色。",
      "監督・背景美術・編集を担当した。絵コンテから最終映像まで一貫して関わった作品。"
    ],
    thumbnail: "assets/works/Blue/01.jpg",
    images: [
      "assets/works/Blue/01.jpg",
      "assets/works/Blue/02.jpg",
      "assets/works/Blue/03.jpg",
      "assets/works/Blue/04.jpg",
      "assets/works/Blue/05.jpg",
      "assets/works/Blue/06.jpg",
    ],
    colors: {
      '--color-bg': '#080c18',
      '--color-text': '#c0d0f0',
      '--color-text-muted': '#92b0ed',
      '--color-border': '#141e34',
      '--color-placeholder': '#101828',
      '--color-placeholder-dark': '#182038',
      '--color-active-bg': '#c0d0f0',
      '--color-active-text': '#080c18',
      '--color-accent': '#6090e0',
      '--color-accent-2': '#eef7fa'
    },
    process: [
      {
        heading: "物語をアニメーションで伝える",
        body: "大学3年生の頃に友達と3人で制作した、オリジナルの2Dアニメーション作品（1分30秒）。自分は監督・背景美術・編集を担当した。ワークフロー：❶Clip Studioでラフを作成 → ❷Illustratorで窓や小物の配置を決める → ❸Clip Studioで遠近感が感じられるように彩色。絵コンテから最終映像まで一貫して関わった。",
        images: [

          "assets/works/Blue/07.jpg",
          "assets/works/Blue/08.jpg",
          "assets/works/Blue/09.jpg"
        ]
      }
    ]
  },
  {
    id: "texture-dessin",
    number: "IX",
    title: "質感デッサン",
    subtitle: "質感デッサン",
    tagline: "短時間で質感のインプットを増やす",
    category: "art",
    categoryLabel: "Illustration / Art",
    tools: ["Clip Studio"],
    year: "2025",
    duration: "2025年10月〜12月（1枚1時間程度）",
    type: "個人制作",
    description: [
      "短時間で質感のインプットを増やすために制作したデッサンシリーズ。",
      "様々な素材・物体の質感を観察し、短時間でスケッチとして記録することを繰り返した練習作品群。"
    ],
    thumbnail: "./assets/works/質感デッサン/08.jpg",
    images: [
      "./assets/works/質感デッサン/08.jpg",
      "./assets/works/質感デッサン/02.jpg",
      "./assets/works/質感デッサン/03.jpg",
      "./assets/works/質感デッサン/04.jpg",
      "./assets/works/質感デッサン/05.jpg",
      "./assets/works/質感デッサン/06.jpg",
      "./assets/works/質感デッサン/07.jpg",
      "./assets/works/質感デッサン/01.jpg",
      "./assets/works/質感デッサン/09.jpg",
      "./assets/works/質感デッサン/10.jpg",
      "./assets/works/質感デッサン/11.jpg"
    ],
    colors: {
      '--color-bg': '#f8f8f4',
      '--color-text': '#262619',
      '--color-text-muted': '#585850',
      '--color-border': '#dcdcd4',
      '--color-placeholder': '#eeeee8',
      '--color-placeholder-dark': '#d4d4cc',
      '--color-active-bg': '#181810',
      '--color-active-text': '#f8f8f4',
      '--color-accent': '#8a8a72',
      '--color-accent-2': '#52412c'
    },
    process: [
      {
        heading: "短時間で質感のインプットを増やす",
        body: "様々な素材・物体の質感を観察し、短時間（1枚1時間程度）でスケッチとして記録することを繰り返した練習作品群。3DCG制作においても質感の引き出しを増やすことを目的に取り組んだシリーズ。",
        images: [
          
        ]
      }
    ]
  },
  {
    id: "satsuei",
    number: "X",
    title: "撮影",
    subtitle: "撮影・コンポジット",
    tagline: "「実在感」を意識して\n After Effects でコンポジット",
    category: "film",
    categoryLabel: "Film / Video",
    tools: ["After Effects"],
    year: "2025",
    duration: "2025年5月〜10月（1カット3時間程度）",
    type: "個人制作",
    description: [
      "FLAT STUDIO様から実際のアニメーションの素材をお借りし、After Effectsでコンポジットの練習をした作品群。",
      "特に意識したのは光の意識と実在感。画面内の光源がどこにあり、それがシーン全体にどれくらいの影響を及ぼすかについて、リファレンスを調べながら映像編集をした。",
      "キャラクターは影面やハイライトなどでレイヤーを分けて輝度・明度・彩度を細かく調整。雨・炎・霧などの処理や被写界深度・ボケ感の演出にも挑戦した。"
    ],
    thumbnail: "assets/works/撮影/03.jpg",
    images: [
      "assets/works/撮影/01.jpg",
      "assets/works/撮影/02.jpg",
      "assets/works/撮影/03.jpg",
      "assets/works/撮影/04.jpg"
    ],
    colors: {
      '--color-bg': '#e9e0d8',
      '--color-text': '#691d1d',
      '--color-text-muted': '#390808',
      '--color-border': '#ccb8b0',
      '--color-placeholder': '#d8ccc4',
      '--color-placeholder-dark': '#c4b4ac',
      '--color-active-bg': '#691d1d',
      '--color-active-text': '#e9e0d8',
      '--color-accent': '#b02020',
      '--color-accent-2': '#850505'
    },
    process: [
      {
        heading: "After Effects でのコンポジット",
        body: "FLAT STUDIOから実際のアニメーションの素材をお借りし、After Effectsでコンポジットの練習をした作品群。特に意識したのは光の意識と実在感。画面内の光源がどこにあり、それがシーン全体にどれくらいの影響を及ぼすかについて、リファレンスを調べながら映像編集した。キャラクターは影面やハイライトなどでレイヤーを分けて輝度・明度・彩度を細かく調整。雨・炎・霧などの処理や被写界深度・ボケ感の演出にも挑戦した。",
        images: [
          
        ]
      },
      {
        heading: "リファレンスをもとに正しいライティングを",
        body: "元素材をレイヤー上に並べただけの状態から、画面左側からの光源を意識して全体の色味を調整。それぞれの素材ごとにエフェクトをかけて色調を整えることで、派手に盛るのではなくシーンの雰囲気に合わせた正しい撮影処理を模索した。コンポジットの際にはレンズ感を意識して被写界深度やボケ感を作り込んだ。",
        images: [
        ]
      }
    ]
  },
  {
    id: "art-to-watashi",
    number: "XI",
    title: "芸術作品と私",
    subtitle: "実写映像",
    tagline: "「瞬間」を捉えた写真のような美しい映像",
    category: "film",
    categoryLabel: "Film / Video",
    tools: ["カメラ", "音楽編集"],
    year: "2021–2024",
    duration: "2021年6月〜2024年7月（100時間）",
    type: "個人制作",
    description: [
      "大学1年生の頃、夜中2時の山形県の自宅マンション周辺を歩き回って一人で撮影した実写映像作品。",
      "構図と色彩構成に凝った映像作品で、音楽も自分で編集した。「瞬間」を捉えた写真のような美しい映像を目指した。"
    ],
    thumbnail: "assets/works/芸術作品と私/01.jpg",
    images: [
      "assets/works/芸術作品と私/01.jpg",
      "assets/works/芸術作品と私/02.jpg",
      "assets/works/芸術作品と私/03.jpg",
      "assets/works/芸術作品と私/04.jpg",
    ],
    colors: {
      '--color-bg': '#080604',
      '--color-text': '#fffb8e',
      '--color-text-muted': '#e8d13b',
      '--color-border': '#201808',
      '--color-placeholder': '#141008',
      '--color-placeholder-dark': '#1e180c',
      '--color-active-bg': '#e0d8c8',
      '--color-active-text': '#080604',
      '--color-accent': '#ffe033',
      '--color-accent-2': '#fefe9c'
    },
    process: [
      {
        heading: "「瞬間」を捉えた写真のような映像",
        body: "大学1年生の頃、夜中2時の山形県の自宅マンション周辺を歩き回って一人で撮影した実写映像作品。構図と色彩構成に凝り、音楽も自分で編集した。生活の中に見つけた美しい「瞬間」を、写真のような鮮明な構図で映像に収めることを目指した。",
        images: [
          "assets/works/芸術作品と私/05.jpg",
          "assets/works/芸術作品と私/06.jpg",
          "assets/works/芸術作品と私/07.jpg",
          "assets/works/芸術作品と私/08.jpg"
        ]
      }
    ]
  },
  {
    id: "dessin",
    number: "XII",
    title: "デッサン",
    subtitle: "デッサン",
    tagline: "形と色の濃度に拘って描いた",
    galleryLayout: "split-left",
    category: "art",
    categoryLabel: "Illustration / Art",
    tools: ["アナログ"],
    year: "2020",
    duration: "2020年6月〜9月（各12時間程度）",
    type: "個人制作",
    description: [
      "形と色の濃度にこだわって描いたアカデミックデッサン。",
      "1. 静物デッサン（木炭・8時間）：立方体・スイカを組み合わせた構図。",
      "2. 石膏デッサン（鉛筆・12時間）：胸像のデッサン。"
    ],
    thumbnail: "assets/images/thumbnail-02.png",
    images: [
      "assets/works/デッサン/01.jpg",
      "assets/works/デッサン/02.jpg"
    ],
    colors: {
      '--color-bg': '#f6f4f0',
      '--color-text': '#181410',
      '--color-text-muted': '#606058',
      '--color-border': '#dcd8d0',
      '--color-placeholder': '#eceae4',
      '--color-placeholder-dark': '#d4d0c8',
      '--color-active-bg': '#181410',
      '--color-active-text': '#f6f4f0',
      '--color-accent': '#706858',
      '--color-accent-2': '#56452c'
    },
    process: []
  },
  {
    id: "somnium",
    number: "XV",
    title: "SOMNIUM",
    subtitle: "小説",
    tagline: "子供の頃から小説を書き続けてきた",
    category: "other",
    categoryLabel: "Other",
    tools: ["執筆"],
    year: "2023",
    duration: "2023年4月〜6月（2ヶ月・200時間）",
    type: "個人制作",
    description: [
      "夢をイメージした1万5000文字の物語。自分の創作の原体験は10歳くらいの時に小説を書き始めたことだった。",
      "この作品では自作の小説の世界観を、イラストで補うという試みに挑戦。文章・イラストが連動するメディアミックス的プロジェクト。"
    ],
    thumbnail: "assets/images/thumbnail.png",
    images: [
      "assets/works/SOMNIUM/01.jpg"
    ],
    colors: {
      '--color-bg': '#131512',
      '--color-text': '#86a48c',
      '--color-text-muted': '#9db092',
      '--color-border': '#1e311e',
      '--color-placeholder': '#101428',
      '--color-placeholder-dark': '#181e38',
      '--color-active-bg': '#c8d0f0',
      '--color-active-text': '#0a0c18',
      '--color-accent': '#6abf80',
      '--color-accent-2': '#a4d5b0'
    },
    process: [
      {
        heading: "小説とイラストのメディアミックス",
        body: "自分の創作の原体験は10歳くらいの時に小説を書き始めたこと。この作品では自作の小説の世界観をイラストで補うという試みに挑戦した。夢をイメージした1万5000文字の物語で、文章・イラストが連動するメディアミックス的プロジェクト。",
        naturalHeight: true,
        images: [
          "assets/works/SOMNIUM/02.jpg",
          "assets/works/SOMNIUM/03.jpg",
          "assets/works/SOMNIUM/04.jpg"
        ]
      }
    ]
  },
  {
    id: "kikakusho",
    number: "XVI",
    title: "企画書",
    subtitle: "企画書",
    tagline: "コンセプトに沿った企画を考えるのが得意です",
    category: "other",
    categoryLabel: "Other",
    tools: ["Illustlator"],
    year: "2025",
    duration: "2025年6月〜9月（一つ約20時間）",
    type: "案件",
    description: [
      "コンセプトに沿った映像企画を考えるのが得意。",
      "企画書では「映像構成案」まで考えることで、MVを見た視聴者にどういう気持ちになってほしいのかや、その映像が何をもたらすのかについて考えながら制作した。"
    ],
    thumbnail: "assets/images/thumbnail-02.png",
    images: [
      "assets/works/企画書/04.png",
      "assets/works/企画書/05.png",
      "assets/works/企画書/06.png"
    ],
    colors: {
      '--color-bg': '#f4f4f4',
      '--color-text': '#141414',
      '--color-text-muted': '#585858',
      '--color-border': '#dcdcdc',
      '--color-placeholder': '#ebebeb',
      '--color-placeholder-dark': '#d4d4d4',
      '--color-active-bg': '#141414',
      '--color-active-text': '#f4f4f4',
      '--color-accent': '#404040',
      '--color-accent-2': '#251954'
    },
    process: [
      {
        heading: "コンセプトに沿った映像企画",
        body: "コンセプトに沿った映像企画を考えるのが得意。企画書では「映像構成案」まで考えることで、MVを見た視聴者にどういう気持ちになってほしいのか、その映像が何をもたらすのかについて考えながら制作した。",
        images: [
          "assets/works/企画書/01.png",
          "assets/works/企画書/02.png",
          "assets/works/企画書/03.png"
        ]
      }
    ]
  },
  {
    id: "kenkyu",
    number: "XVII",
    title: "研究",
    subtitle: "研究・学術",
    tagline: "誰よりも幅広い分野を学んできた",
    category: "other",
    categoryLabel: "Other",
    tools: ["書籍"],
    year: "2020–",
    duration: "2020年5月〜",
    type: "個人制作",
    description: [
      "哲学・物理学・美術史・歴史・心理学など、好奇心の赴くままに幅広い分野を研究してきた。",
      "「日本のアニメとアメリカのヒップホップの関係性」「数学史」「天皇史・新古典主義」「建築と宗教・啓蒙主義・グローバル化」などのテーマでそれぞれ5000文字程度の考察文をまとめた。"
    ],
    thumbnail: "assets/images/thumbnail.png",
    images: [
      "assets/works/研究/01.jpg",
      "assets/works/研究/02.jpg",
      "assets/works/研究/03.jpg",
      "assets/works/研究/04.jpg"
    ],
    colors: {
      '--color-bg': '#f6f2ea',
      '--color-text': '#1a1410',
      '--color-text-muted': '#505068',
      '--color-border': '#dcd4c4',
      '--color-placeholder': '#ece4d4',
      '--color-placeholder-dark': '#d4ccbc',
      '--color-active-bg': '#1a1410',
      '--color-active-text': '#f6f2ea',
      '--color-accent': '#8b7040',
      '--color-accent-2': '#193445'
    },
    process: [
      {
        heading: "幅広い分野への探求",
        body: "哲学・物理学・美術史・歴史・心理学など好奇心の赴くままに幅広い分野を研究してきた。「日本のアニメとアメリカのヒップホップの関係性」「数学史」「天皇史・新古典主義」「建築と宗教・啓蒙主義・グローバル化」などのテーマでそれぞれ5000文字程度の考察文をまとめた。代数学・解析学・幾何学・確率論の歴史から建築と西洋史まで、ダイナミックに記述した。",
        images: [
           "assets/works/研究/05.jpg",
           "assets/works/研究/06.jpg",
           "assets/works/研究/07.jpg",
          "assets/works/研究/08.jpg"
        ]
      }
    ]
  }
];

/**
 * IDで作品を取得
 */
function getWorkById(id) {
  return WORKS.find(w => w.id === id) || null;
}

/**
 * カテゴリで作品を絞り込み
 */
function getWorksByCategory(category) {
  if (category === "all") return WORKS;
  return WORKS.filter(w => w.category === category);
}

/**
 * 前後の作品を取得（詳細ページのページネーション用）
 */
function getAdjacentWorks(id) {
  const idx = WORKS.findIndex(w => w.id === id);
  return {
    prev: idx > 0 ? WORKS[idx - 1] : null,
    next: idx < WORKS.length - 1 ? WORKS[idx + 1] : null
  };
}
