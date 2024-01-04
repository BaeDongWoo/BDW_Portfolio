export const PROJECT_DATA = [
  {
    front: {
      img: 'BDW_01.png',
      title: '포트폴리오',
      people: '1인 프로젝트',
      discript: `저를 간단하게 소개할 수 있는 포트폴리오 웹사이트 입니다. TypeScript와 Next.Js를 사용해 개발하였고, 미디어 쿼리를 사용해 반응형으로 제작할 수 있도록 노력했습니다.
        
        styeld-component를 사용해 컴포넌트 별 스타일링과 동적인 스타일링을 경험 할 수 있었습니다. 또한 간단한 keyframe 애니메이션과 Swiper,AOS 라이브러리 등도 함께 경험 했습니다.`,
    },
    back: {
      imgList: [
        'BDW_home-002.png',
        'BDW_about-002.png',
        'BDW_skill-002.png',
        'BDW_project-002.png',
      ],
      mainFunc: [
        '나만의 포트폴리오 사이트를 제작해보기 위함',
        '미디어 쿼리를 활용한 반응형 웹페이지',
      ],
      url: [
        {
          icon: 'github.png',
          url: 'https://github.com/BaeDongWoo/BDW_Portfolio',
        },
        { icon: 'url.png', url: 'https://bdw-portfolio.vercel.app/' },
      ],
      skills: [
        { name: 'REACT', bgcol: '#61DAFB', color: '#fff' },
        { name: 'TS', bgcol: '#3178C6', color: '#fff' },
        { name: 'NEXT.JS', bgcol: '#000000', color: '#fff' },
      ],
    },
  },
  {
    front: {
      img: '시작.png',
      title: 'My-ToDo',
      people: '1인 프로젝트',
      discript: `처음 리액트를 학습할 때 간단하게 했었던 투두리스트를 생각하며, 캘린더와 드래그 앤 드롭 등 직접 구현해 보고 싶었던 기능들과 함께 학습을 위해 개발한 일정관리 서비스 입니다. 
      
      작은 서비스이지만 처음부터 끝까지 혼자서 개발을 해본 것에 의미가 있었고, 그 과정에서 Redux Store, JWT 등을 학습한 것에도 의미가 있었습니다. 또한 gitpage를 통한 배포도 경험해 볼 수 있었습니다. `,
    },
    back: {
      imgList: ['시작.png', '회원가입.png', '로그인.png', '메인화면.png'],
      mainFunc: [
        '캘린더를 통해 일정 등록',
        '등록한 일정 캘린더를 통해 미리보기',
        '등록한 일정 수정',
      ],
      url: [
        { icon: 'github.png', url: 'https://github.com/BaeDongWoo/ToDo-List' },
        { icon: 'url.png', url: 'https://baedongwoo.github.io/ToDo-List/' },
      ],
      skills: [
        { name: 'REACT', bgcol: '#61DAFB', color: '#fff' },
        { name: 'JS', bgcol: '#F7DF1E', color: '#fff' },
        { name: 'CSS', bgcol: '#1572B6', color: '#fff' },
        { name: 'AXIOS', bgcol: '#5A29E4', color: '#fff' },
        { name: 'REDUX', bgcol: '#764ABC', color: '#fff' },
        { name: 'NODE.JS', bgcol: '#339933', color: '#fff' },
        { name: 'EXPRESS', bgcol: '#000000', color: '#fff' },
        { name: 'MYSQL', bgcol: '#4479A1', color: '#fff' },
      ],
    },
  },
  {
    front: {
      img: '땡그랑_title-002 (2).png',
      title: '땡그랑',
      people: '4인 프로젝트',
      discript: `신한 DS 교육 과정 중 진행한 팀 프로젝트로 코로나 시대를 거치면서 MZ세대 사이에서는 무지출 챌린지, 거지방 등의 짠테크가 유행함에 따라 이를 쉽게 제공하기 위한 챌린지형 저축 서비스 입니다. 
        
      기획부터 배포까지 진행하며 서비스를 개발하는 과정을 경험해 볼 수 있었고, 팀원들과 협업하는 과정에서 다양한 협업 툴과 컨벤션, 명세 등의 중요성도 느낄 수 있었습니다.
        `,
    },
    back: {
      imgList: [
        'clink_main-002.png',
        'clink_chal_1_-002.png',
        'clink_chal_2_-002.png',
        'clink_comm-002.png',
      ],
      mainFunc: [
        '사용자는 계좌번호와 일일 목표 금액을 설정',
        '챌린지 성공 시 차액 저축',
        '시각 자료를 통해 자신의 소비습관 확인',
        '커뮤니티를 통해 정보 공유',
      ],
      url: [
        { icon: 'github.png', url: 'https://github.com/BaeDongWoo/clink_web' },
      ],
      skills: [
        { name: 'REACT', bgcol: '#61DAFB', color: '#fff' },
        { name: 'JS', bgcol: '#F7DF1E', color: '#fff' },
        { name: 'SASS', bgcol: '#CC6699', color: '#fff' },
        { name: 'AXIOS', bgcol: '#5A29E4', color: '#fff' },
        { name: 'SpringBoot', bgcol: '#6DB33F', color: '#fff' },
        { name: 'MYSQL', bgcol: '#4479A1', color: '#fff' },
      ],
    },
  },
];
