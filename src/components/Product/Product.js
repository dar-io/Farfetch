import React from 'react'
import './Product.scss'
import Layout from '../Layout/Layout';
import Modal from '../Modal/Modal';
import ShopTheLookModal from '../ShopTheLookModal/ShopTheLookModal';
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
 



class Product extends React.Component {

    state = {
      show: false
    }
  
    showModal = () => {
      this.setState({
        ...this.state, show: !this.state.show
      });
      document.body.classList.add('modal-open');
      this.setState({ showModal: true });
    }
  
  
    render() {
      return (
  
      <Layout className="product">
       

    <div id="slice-pdp" style={{zIndex: 'auto'}}>
    <Modal 
              onClose={this.showModal}
              show={this.state.show}>
            
              <ShopTheLookModal/>
            </Modal>
           
           

        <div className="noTouch " data-tstid="sliceMain" data-isloaded="true">
            <svg style={{display:'none'}} xmlns="http://www.w3.org/2000/svg">
                <symbol id="iconArrowThinDown" viewBox="0 0 12 7">
                    <title>Fo_ThinArrowDown_ico</title>
                    <path d="M1.66.64a.5.5 0 1 0-.7.72L5.7 5.93c.2.19.5.18.7 0l4.64-4.57a.5.5 0 0 0-.7-.72l-4.3 4.23L1.66.64z"></path>
                </symbol>
                <symbol id="iconArrowThinLeft" viewBox="0 0 8 12">
                    <title>Ico_Arrow_Left</title>
                    <path d="M1.1 6.02a.56.56 0 0 0 0 .79l4.94 4.94c.24.25.64.25.88 0a.62.62 0 0 0 0-.88L2.86 6.8a.56.56 0 0 1 0-.8l4.06-4.05a.62.62 0 1 0-.88-.89L1.09 6.02z"></path>
                </symbol>
                <symbol id="iconArrowThinRight" viewBox="0 0 7 12">
                    <title>Ico_Arrow_Right</title>
                    <path d="M6.52 6.48a.56.56 0 0 0 0-.79L1.58.75a.62.62 0 0 0-.89 0 .62.62 0 0 0 0 .88L4.75 5.7c.22.22.22.57 0 .8L.7 10.53a.62.62 0 1 0 .89.89l4.94-4.95z"></path>
                </symbol>
                <symbol id="iconArrowSolidDown" viewBox="0 0 10 5">
                    <title>Ico_Down_Arrow_Solid</title>
                    <path d="M.82.87L4.84 4.9c.17.18.46.18.64 0L9.49.87c.2-.2.2-.52 0-.72A.51.51 0 0 0 9.15 0H1.18a.51.51 0 0 0-.36.87z"></path>
                </symbol>
                <symbol id="iconBag" viewBox="0 0 9 12">
                    <title>Ico_AddBag</title>
                    <path d="M8.19 4.02H6.12V2.59a2.2 2.2 0 0 0-.54-1.44A1.85 1.85 0 0 0 5 .71a1.67 1.67 0 0 0-1.43 0 2.05 2.05 0 0 0-.98 1.08c-.1.25-.14.52-.14.8v1.43H.38a.25.25 0 0 0-.2.09.33.33 0 0 0-.08.21v6.55a.33.33 0 0 0 .09.22.26.26 0 0 0 .19.08l2.38.38H5.8l2.39-.38c.03 0 .07 0 .1-.02a.27.27 0 0 0 .15-.16.33.33 0 0 0 .02-.12V4.33a.33.33 0 0 0-.08-.21.25.25 0 0 0-.2-.09zm-5.2-1.43c0-.4.14-.76.38-1.02.23-.26.56-.42.91-.42.36 0 .68.16.92.42.23.26.38.62.38 1.01v1.44h-2.6V2.59z"></path>
                    <path d="M3.42 4.9c0 .2-.16.37-.35.37-.19 0-.34-.17-.34-.38 0-.2.15-.38.34-.38.2 0 .35.17.35.38M6.6 4.9c0 .2-.16.37-.35.37-.2 0-.35-.17-.35-.38 0-.2.16-.38.35-.38.19 0 .34.17.34.38"></path>
                </symbol>
                <symbol id="iconBoxClock" viewBox="0 0 24 20">
                    <title>Ico_Box_Clock</title>
                    <g fill="none" fillRule="evenodd">
                        <g transform="translate(8.53 .6)" stroke="#60929F">
                            <ellipse cx="3.49" cy="3.49" rx="3.49" ry="3.49"></ellipse>
                            <g strokeLinecap="round">
                                <path d="M3.44 3.5V1.3M3.44 3.5h-1.3"></path>
                            </g>
                        </g>
                        <path stroke="#60929F" strokeLinecap="round" strokeLinejoin="round" d="M.62 8l11.4 4.88v6.52L.63 14.51zM12.03 19.4l11.4-4.88V8l-11.4 4.89z"></path>
                        <path d="M15.28 11.26l4.89-2.04v2.26c0 .55-.42 1.17-.92 1.38l-3.05 1.27c-.5.21-.92-.07-.92-.61v-2.26z" fill="#60929F"></path>
                        <path d="M23.43 8l-5.7-2.45M.62 8l5.7-2.45" stroke="#60929F" strokeLinecap="round"></path>
                    </g>
                </symbol>
                <symbol id="iconChat" viewBox="0 0 25 20">
                    <title>Ico_Chat</title>
                    <path d="M1.56 0C.78 0 0 .81 0 1.56v12.5c0 .78.78 1.63 1.56 1.63h8.5c.18 0 .35.07.48.2l3.89 3.88a.67.67 0 0 0 1.14-.47v-2.93c0-.38.3-.68.68-.68h7.19c.78 0 1.56-.85 1.56-1.63V1.56C25 .78 24.22 0 23.44 0H1.56z"></path>
                </symbol>
                <symbol id="iconCross" viewBox="0 0 9 9">
                    <title>Exit</title>
                    <path d="M5.37 4.5l3.45-3.46a.61.61 0 0 0-.87-.86L4.5 3.63 1.04.18a.61.61 0 0 0-.86.86L3.63 4.5.18 7.95a.61.61 0 0 0 .86.87L4.5 5.37l3.45 3.45a.61.61 0 0 0 .87-.87L5.37 4.5z"></path>
                </symbol>
                <symbol id="iconClock" viewBox="0 0 120 120">
                    <defs>
                        <style>
                            {/* .cls-1 {{ opacity: '0'}} */}
                        </style>
                    </defs>
                    <title>clock</title>
                    <path className="cls-1" d="M0 0h120v120H0z"></path>
                    <path d="M60 0a60 60 0 1 0 60 60A60 60 0 0 0 60 0zm0 108a48 48 0 1 1 48-48 48.05 48.05 0 0 1-48 48z"></path>
                    <path d="M66 30H54v36h36V54H66V30z"></path>
                </symbol>
                <symbol id="iconCustomise" viewBox="0 0 19 20">
                    <defs>
                        <path id="a" d="M0 .54h18.16v19.34H0"></path>
                        <path id="c" d="M0 .54h18.16v19.34H0"></path>
                        <path id="e" d="M0 .54h18.16v19.34H0"></path>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                        <mask id="b" fill="#fff">
                            <use xlinkHref="#a"></use>
                        </mask>
                        <path fill="#0098CF" d="M3.09 3.6C5.5 2.55 7.92 1.54 10.35.53c.65 1.64 1.33 3.27 2 4.91l.13.36c-1.86-.25-.65 2.6-2.5 2.37-.05.06-4.1-.73-4.06-2.13-1.78-.5-2.83-1.33-4.65-1.6.55-.4 1.2-.58 1.82-.86" mask="url(#b)"></path>
                        <path fill="#FEC421" d="M10.35.54c2.62 2 5.22 4 7.81 6.03l-.1.13c-1.2 1.38-3.26 2.37-4.4 3.79-5.32 2.76-2.06-.68-2.87-2.51-.66-1.64.21-5.8-.44-7.44" mask="url(#b)"></path>
                        <mask id="d" fill="#fff">
                            <use xlinkHref="#c"></use>
                        </mask>
                        <path fill="#007FB5" d="M1.27 4.45c1.85 0 7.3 2.8 9.08 3.29C9.17 9.29 7.3 12.24 4 11.38c-1.05 1.4-2.88 1.36-4 2.7.37-3.22.94-6.41 1.27-9.63" mask="url(#d)"></path>
                        <path fill="#F8991C" d="M14.1 9.3l4.06-2.73s-.92 6.5-1.34 9.67l-.1-.02c-1.82-.36-5.12-3.49-6.95-3.77 1.13-1.5 4.33-3.14 4.33-3.14" mask="url(#d)"></path>
                        <path fill="#3B404A" d="M7.65 19.88c-2.59-1.89-5.11-3.86-7.65-5.8 1.12-1.34 1.55-1.11 3.8-2.61l4.25-1.84" mask="url(#d)"></path>
                        <mask id="f" fill="#fff">
                            <use xlinkHref="#e"></use>
                        </mask>
                        <path fill="#F05A3E" d="M10.27 12.59c1.83.27 4.62 3.27 6.44 3.63-2.98 1.31-6.05 2.42-9.06 3.66-.06-.15.31-7.5.3-7.53" mask="url(#f)"></path>
                        <path fill="#FEFEFE" d="M11.95 10.15a2.59 2.59 0 0 1-2.6 2.6 2.6 2.6 0 0 1-2.62-2.6 2.6 2.6 0 0 1 5.22 0" mask="url(#f)"></path>
                    </g>
                </symbol>
                <symbol id="iconEmail" viewBox="0 0 21 14">
                    <title>Ico_email</title>
                    <path d="M20.04 2.66V1.19c0-.3-.24-.53-.53-.53H.58C.28.66.04.9.04 1.2v1.44L9.8 7.4c.15.08.33.08.48 0l9.76-4.74"></path>
                    <path d="M.04 12.89c0 .3.24.53.54.53H19.5c.3 0 .53-.24.53-.53V3.98l-9.76 4.75a.54.54 0 0 1-.47 0L.04 3.96v8.93z"></path>
                </symbol>
                <symbol id="iconF90Logo" viewBox="0 0 37 20">
                    <title>F90 Logo</title>
                    <path d="M2.24 2.3h4.51V0H2.24z"></path>
                    <path d="M0 2.29v9.17h2.26V6.88h3.38V4.57H2.26V2.29zM10.65 6.56c0-3.76 1.5-6.25 4.13-6.56-3.87.1-6.93 3.14-6.93 6.65 0 3.95 2.94 6.14 6.42 6.14.18 0 .35-.01.52-.03-2.6-.08-4.14-2.18-4.14-6.2"></path>
                    <path d="M18.68 1.92c1.74 2.76 1.28 7.83 1.28 7.83-.38 5.36-3.3 8.58-9.87 10.04v.1c3.78-.54 6.96-1.98 9.13-4.08 2-1.93 3.24-4.78 3.24-8 0-4.49-2.76-7.76-6.78-7.81h-.16c.28 0 1.96 0 3.16 1.92M26 6.42C26 1.95 27.47.09 30.07 0v.01a6.5 6.5 0 0 0-6.51 6.46 6.26 6.26 0 0 0 6.44 6.34C27.45 12.66 26 10.76 26 6.4M30.35.02V0c2.52.16 3.96 2.1 3.96 6.43 0 4.46-1.45 6.29-4.04 6.39A6.47 6.47 0 0 0 36.8 6.4 6.29 6.29 0 0 0 30.35.02M2.26 0v2.3H0z"></path>
                </symbol>
                <symbol id="iconFacebook" viewBox="0 0 11 25">
                    <title>Ico_Facebook</title>
                    <path d="M2.33 5.38V8.6H0v3.96h2.33v11.75H7.1V12.57h3.21s.3-1.9.45-3.97H7.13V5.9c0-.41.52-.96 1.04-.96h2.6V.83H7.23c-5.02 0-4.9 3.96-4.9 4.55"></path>
                </symbol>
                <symbol id="iconGooglePlus" viewBox="0 0 34 24">
                    <title>Ico_Google +</title>
                    <path d="M33.6 10.76h-3.43V7.09h-2.74v3.67H24v2.93h3.43v3.68h2.74v-3.68h3.42v-2.93zm-21.94-.74v4.58h5.98c-.46 2.77-2.7 4.78-5.98 4.78-3.62 0-6.56-3.28-6.56-7.16 0-3.88 2.94-7.15 6.56-7.15 1.63 0 3.09.6 4.24 1.77v.01L19 3.54A10.16 10.16 0 0 0 11.65.48C5.6.48.69 5.74.69 12.23s4.9 11.75 10.97 11.75c6.33 0 10.53-4.78 10.53-11.49 0-.86-.08-1.68-.21-2.47H11.66z"></path>
                </symbol>
                <symbol id="iconHanger" viewBox="0 0 25 18">
                    <title>Ico_Hanger</title>
                    <path d="M24.6 14.26c-.71-.72-11.22-6.87-11.33-6.94l-.05-.03V6.23l.04-.03.47-.4c.75-.6 1.68-1.36 1.68-2.74A3.06 3.06 0 0 0 12.35 0C10.61 0 9.3 1.25 9.3 2.9c0 .26.08.49.21.65.17.22.43.31.77.28.53-.05.6-.56.62-1.09V2.6c.04-.43.66-1.05 1.46-1.05.84 0 1.52.67 1.52 1.5 0 .82-.18 1.16-1.29 1.7-.51.26-.81.54-.81 1.2l.01 1.34-.05.03c-.1.07-10.61 6.22-11.34 6.94-.38.39-.55 1.46-.2 2.3.22.52.7 1.14 1.78 1.14h21.06c1.08 0 1.56-.62 1.78-1.13.35-.85.18-1.92-.2-2.3zm-2.27 1.83H2.92c-.4 0-1-.07-.97-.6.03-.53.51-.86.51-.86l10.16-5.9 10.15 5.9s.48.33.52.86c.03.53-.57.6-.96.6z"></path>
                </symbol>
                <symbol id="iconInfo" viewBox="0 0 120 120">
                    <title>iconInfo</title>
                    <g fillRule="nonzero" fill="#222">
                        <path d="M60 0a60 60 0 1 0 0 120A60 60 0 0 0 60 0zm0 108a48 48 0 1 1 0-96 48 48 0 0 1 0 96z"></path>
                        <path d="M54 54h12v36H54z"></path>
                        <circle cx="60" cy="36" r="6"></circle>
                    </g>
                </symbol>
                <symbol id="iconMagnifyingGlass" viewBox="0 0 17 18">
                    <title>Ico_Magnifying Glass</title>
                    <path d="M2.11 7.78A7.46 7.46 0 0 1 14.8 2.54a7.34 7.34 0 0 1 0 10.47 7.46 7.46 0 0 1-10.51 0 7.34 7.34 0 0 1-2.18-5.23zm13.17 0a5.75 5.75 0 0 0-11.46 0c0 1.52.59 2.96 1.67 4.04a5.75 5.75 0 0 0 9.79-4.04z"></path>
                    <path d="M-.01 16.4c0-.2.08-.43.24-.6l3.95-3.93a.85.85 0 0 1 1.2 1.2l-3.94 3.94a.85.85 0 0 1-1.45-.6M9.93 10.54V8.17h2.39a.39.39 0 1 0 0-.78H9.93V5.02a.39.39 0 0 0-.78 0v2.37H6.77a.39.39 0 1 0 0 .78h2.38v2.37a.39.39 0 0 0 .78 0"></path>
                </symbol>
                <symbol id="iconPhone" viewBox="0 0 16 17">
                    <title>Ico_Phone</title>
                    <path d="M15.17 12.7l-.1-.19c-.25-.6-3.46-1.5-3.72-1.52l-.22.01c-.4.08-.83.42-1.65 1.13a.53.53 0 0 1-.6.07c-1.09-.59-2.44-1.78-3.11-2.51-.72-.8-1.6-2.06-2.03-3.1a.5.5 0 0 1 .15-.56c.96-.83 1.37-1.23 1.4-1.67C5.3 4.11 4.75.91 4.17.6L4 .49C3.63.24 3.07-.1 2.45.02c-.15.02-.29.08-.43.16C1.61.45.6 1.13.12 2.03c-.28.56-.41 5.64 3.52 9.94 3.88 4.25 8.68 4.43 9.4 4.29h.01l.07-.02a5.43 5.43 0 0 0 2.1-1.6c.57-.7.17-1.5-.05-1.94"></path>
                </symbol>
                <symbol id="iconPinterest" viewBox="0 0 19 25">
                    <title>Ico_Pintersest</title>
                    <path d="M10.08.83C3.78.83.61 5.43.61 9.26c0 2.32.86 4.38 2.71 5.15.3.13.58 0 .67-.33l.27-1.09c.09-.34.05-.46-.2-.75a3.93 3.93 0 0 1-.87-2.65c0-3.4 2.51-6.46 6.53-6.46 3.56 0 5.52 2.21 5.52 5.17 0 3.9-1.7 7.18-4.2 7.18-1.4 0-2.43-1.17-2.1-2.6.4-1.71 1.17-3.56 1.17-4.8 0-1.1-.58-2.02-1.79-2.02-1.42 0-2.56 1.5-2.56 3.5 0 1.27.43 2.13.43 2.13l-1.7 7.36c-.51 2.18-.08 4.85-.05 5.12.02.16.23.2.32.08.13-.17 1.82-2.3 2.4-4.42l.93-3.7c.46.89 1.8 1.68 3.24 1.68 4.26 0 7.15-3.96 7.15-9.25 0-4-3.33-7.73-8.4-7.73"></path>
                </symbol>
                <symbol id="iconRefresh" viewBox="0 0 24 24">
                    <title>icon-refresh</title>
                    <path d="M19.85 14.7a.62.62 0 0 0-.8.37 7.09 7.09 0 1 1-1.65-7.41l.1.11h-3.46a.62.62 0 0 0 0 1.24h4.76c.34 0 .62-.29.62-.63V3.62a.62.62 0 0 0-1.24 0v3.05A8.34 8.34 0 0 0 6.5 18.56a8.33 8.33 0 0 0 13.74-3.07.62.62 0 0 0-.38-.8z"></path>
                </symbol>
                <symbol id="iconStar" viewBox="0 0 17 16">
                    <title>Ico_Star</title>
                    <path d="M16.54 6.22a.38.38 0 0 0-.36-.26h-5.46L9.04.74a.38.38 0 0 0-.72 0L6.63 5.96H1.18c-.17 0-.31.1-.36.26-.05.16 0 .33.14.42l4.41 3.23-1.69 5.22a.38.38 0 0 0 .58.42l4.42-3.22 4.42 3.22a.37.37 0 0 0 .44 0c.13-.1.18-.27.13-.42L12 9.87l4.41-3.23c.13-.1.19-.26.14-.42"></path>
                </symbol>
                <symbol id="iconTwitter" viewBox="0 0 27 24">
                    <title>Ico_Twitter</title>
                    <path d="M26.1 3.48a12.77 12.77 0 0 1-2.68 2.93v.65A17.09 17.09 0 0 1 19.5 17.9a15.07 15.07 0 0 1-4.75 3.75 14.11 14.11 0 0 1-6.51 1.45c-1.51 0-2.96-.23-4.33-.68A15.85 15.85 0 0 1 0 20.52c.21.03.42.05.63.05h.67a9.9 9.9 0 0 0 6.62-2.38 5.07 5.07 0 0 1-3.14-1.13 5.45 5.45 0 0 1-1.84-2.78 3.78 3.78 0 0 0 1.71.1c.22-.03.45-.08.69-.14a5.5 5.5 0 0 1-4.31-5.5V8.7c.35.18.73.34 1.13.46.4.13.85.19 1.36.19a4.98 4.98 0 0 1-1.78-1.96 6.01 6.01 0 0 1 .09-5.54 15.36 15.36 0 0 0 4.84 4.17c1.9 1.04 3.96 1.6 6.18 1.7a5.79 5.79 0 0 1 3.13-6.45 4.9 4.9 0 0 1 2.07-.44c.8 0 1.53.16 2.18.49a6.2 6.2 0 0 1 1.73 1.28c.6-.1 1.18-.27 1.78-.52.59-.24 1.14-.5 1.64-.79a6.17 6.17 0 0 1-2.35 3.08c.56-.07 1.1-.17 1.6-.33.5-.15.99-.34 1.46-.56">

                    </path>
                </symbol>
                <symbol id="iconWeibo" viewBox="0 0 23 20">
                    <title>Icon_Weibo</title>
                    <path d="M17.19 9.52c-.32-.1-.54-.16-.38-.58.37-.92.4-1.71.01-2.28-.74-1.06-2.77-1-5.1-.02 0 0-.73.32-.54-.26.36-1.15.3-2.12-.25-2.68-1.27-1.26-4.62.05-7.5 2.93C1.27 8.8.03 11.07.03 13.05c0 3.77 4.84 6.07 9.58 6.07 6.21 0 10.35-3.61 10.35-6.48 0-1.73-1.46-2.7-2.77-3.12zm-7.57 8.25c-3.78.37-7.05-1.34-7.3-3.82-.24-2.48 2.63-4.8 6.41-5.18 3.79-.37 7.05 1.34 7.3 3.82.24 2.49-2.63 4.8-6.4 5.18z"></path>
                    <path d="M10 10.69a4.12 4.12 0 0 0-4.62 2.01c-.8 1.62-.02 3.41 1.8 4 1.88.6 4.1-.32 4.87-2.07.76-1.7-.19-3.46-2.05-3.94zm-1.37 4.13c-.37.58-1.15.84-1.74.57-.59-.27-.76-.95-.4-1.52a1.44 1.44 0 0 1 1.71-.57c.6.25.78.93.43 1.52zm1.2-1.55c-.13.23-.42.34-.65.24-.23-.1-.3-.35-.17-.57.13-.22.41-.33.64-.24.23.09.3.34.18.57zM18.68 8.06c.4.12.82-.1.94-.49a2.94 2.94 0 0 0-3.42-3.79.75.75 0 0 0 .32 1.47 1.44 1.44 0 0 1 1.67 1.86c-.13.4.1.82.49.95"></path>
                    <path d="M21.31 2.6A6.05 6.05 0 0 0 15.56.75a.88.88 0 0 0 .36 1.72 4.3 4.3 0 0 1 5 5.53.88.88 0 0 0 1.67.54h-.01a6.05 6.05 0 0 0-1.27-5.92"></path>
                </symbol>
                <symbol id="iconWorld" viewBox="0 0 20 20">
                    <path fill="#222" fillRule="evenodd" d="M10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1.4 1.53c-.14.4-.8.13-1.12.13a3.76 3.76 0 0 0 .76-.34.12.12 0 0 0 0-.05l.38.06a2.57 2.57 0 0 0-.33.16l.31.04zm-3.5.18c.15.15.32-.08.47-.16a4.7 4.7 0 0 1 1.17-.26c-.24.12-.52.19-.8.18-.24.09-.12.15-.3.42h.22v.05c-.16 0-.32-.1-.35.1-.2-.31-.34-.29-.57 0 .22.12.44.27.27.49-.18.21-.34-.06-.12-.2-.2-.08-.35-.24-.5-.04h.2a2.4 2.4 0 0 1-.12.25 1.44 1.44 0 0 1-.49-.08 3.94 3.94 0 0 0-.7 0c.04.3-.29 0-.4-.05a.75.75 0 0 1 .73-.1c.2 0 .51 0 .54-.25a.55.55 0 0 1-.45-.2c-.11-.14 0 0 0-.05a8.73 8.73 0 0 1 1.24-.4.2.2 0 0 0-.02.31H7.9zM1.2 10c0-2 .7-3.96 1.96-5.52l.38.3c.13.13.24.28.32.44l.12.19c.1.1.17.22.2.36a1.92 1.92 0 0 1-.04.48 1.6 1.6 0 0 0 .44 1.4c.12.11.26.16.38.27.08.1.14.2.18.31.19.32.44.62.66.92.22.3.27.2.08-.07a5.9 5.9 0 0 1-.4-.56.74.74 0 0 1-.07-.27c.24.09.44.27.55.5a2.4 2.4 0 0 1 .46.65c.12.3.35.53.65.63.19.12.39.21.6.28.16-.03.33-.03.49 0 .12.12.25.22.38.3.14 0 .27.04.4.09.16.11.22.3.38.43.12.1.26.18.42.22h.32a.36.36 0 0 1 .16.46c-.06.2-.25.33-.32.53a1.9 1.9 0 0 0-.05.5c0 .18-.17 0 0 .3.07.15.15.28.25.4.14.26.31.49.52.7a2 2 0 0 1 .59.53 2.08 2.08 0 0 1 0 .8c-.04.45-.1.89-.19 1.33-.15.28-.2.6-.15.92a.32.32 0 0 1 0 .33v.16c0 .06-.18.22-.23.37.17 0 .18.06.14.12h-.7A8.8 8.8 0 0 1 1.2 10zm10.46 8.64a.29.29 0 0 1-.1-.13l.22-.34c.02-.13.06-.25.12-.37.1-.12.3-.08.26-.3a.58.58 0 0 0 .74-.55c-.08 0-.06 0-.08-.1.13.02.26.02.39 0 .18-.17.34-.37.49-.58.12-.1.22-.23.3-.37a2.4 2.4 0 0 1 .12-.33v.05a.89.89 0 0 1 .56-.3.43.43 0 0 0 .22-.23c.19-.18.23-.08.28-.37a4 4 0 0 1 .06-.6c.12-.2.27-.38.44-.54a.49.49 0 0 0 .06-.58 1.6 1.6 0 0 0-.64-.28 4.32 4.32 0 0 1-.6-.12c-.2-.09-.38-.31-.5 0a.58.58 0 0 1-.18-.14c0 .08.21-.07.24-.1a2 2 0 0 1-.44.04c0-.09.18-.28.18-.32a.68.68 0 0 0-.46-.51 1.42 1.42 0 0 1-.56-.18 1.69 1.69 0 0 0-.8-.41h-.2a2.49 2.49 0 0 1-.36-.17.68.68 0 0 0-.34.1c-.15 0-.2-.16-.4 0-.22.16-.15.32-.53.23a1.51 1.51 0 0 1-.6-.07.4.4 0 0 1-.04-.57c-.09.07-.08-.15-.14-.2a1.14 1.14 0 0 0-.36 0c-.15 0-.24-.04-.21-.2.03-.15.46-.58 0-.57a5.7 5.7 0 0 0-.55.4.6.6 0 0 1-.67-.28.85.85 0 0 1 .67-1.18c.37 0 .93-.32 1.21.1.08.12.28.6.39.29a3.02 3.02 0 0 0-.11-.67c.08-.1.18-.2.3-.3.14-.08.28-.2.4-.34a.66.66 0 0 1 0-.28.65.65 0 0 1 .2-.1c.06-.07.06-.2.13-.27a1.6 1.6 0 0 1 .26-.15c.1-.15.24-.29.39-.4a.64.64 0 0 1 .57-.22c-.08.09-.28.14-.33.23a.5.5 0 0 0 .34 0c.18-.09.35-.2.5-.32.28-.17.62-.21.93-.13a.8.8 0 0 0-.21-.42c-.12-.14-.15-.25-.33-.08-.06.09-.11.19-.15.29a.51.51 0 0 1-.36.32h.04c-.19 0-.36.12-.44-.11a.75.75 0 0 0 0-.28c-.13-.17-.57.2-.73.25.08-.64.8-.3 1.24-.43.2-.05.39-.15.54-.3a.94.94 0 0 0-.4-.47 1.09 1.09 0 0 1-.37-.47c-.1-.25-.18-.5-.44-.32-.1.07 0 .22-.2.24a.43.43 0 0 1-.28-.18.8.8 0 0 0-.36-.36 1.2 1.2 0 0 0-.75-.1.8.8 0 0 0 .07.66c.1.32.15.32-.12.52-.12.1-.2 0-.16.25 0 .14.17.16.07.28a.29.29 0 0 1-.29 0c-.23-.1 0-.25-.14-.4A2.58 2.58 0 0 0 9 4.5c-.33-.15-1.21-.31-.94-.8.13-.17.29-.31.47-.42.14-.06.28-.13.4-.22.06-.06.06-.24.12-.29a.8.8 0 0 1 .42 0c.5-.1.04-.84.72-.7.2.07.37.18.52.33.18.12.24.1.18.29a1.52 1.52 0 0 1-.26.26 1.6 1.6 0 0 1-.34.14c.28-.04.57.02.8.18.2.17.45.27.7.26a2.4 2.4 0 0 1-.26-.24c0-.12.16 0 .18 0 .03 0 .3.1.26-.13-.05-.24-.5-.1-.35-.44.2 0 .14.2.28.25.16 0 .3-.1.36-.24-.2-.1-.8-.27-.75-.56l1.23.8c-.33.3.24.12.28.13.04.01.34.24.18.28-.16.04-.25-.2-.43 0 .14 0 .65.07.51.34a1.66 1.66 0 0 0-.47.3h.22c-.16.24.07.4.2.6.13.27.35.49.62.62.6.14.53-.8 1-.99.12-.04.26 0 .38-.04.13-.05.24-.13.34-.22.22-.14.48-.21.74-.2A8.8 8.8 0 0 1 18.3 7a.46.46 0 0 0-.12.1.66.66 0 0 0-.06.15c-.02.05-.06.04-.07.08a.8.8 0 0 0 0 .29.46.46 0 0 0 0 .28 1.2 1.2 0 0 0 .21.23.38.38 0 0 0 .25.13h.14c0 .13.04.27.06.4a1.4 1.4 0 0 0-.24.3.93.93 0 0 1-.2.33c-.12.07-.24.16-.35.26a2.08 2.08 0 0 0-.15.36l-.17.18c-.04.22-.04.44 0 .66-.06.22-.04.45.04.66a2.8 2.8 0 0 0 .5.54c.11.11.24.2.39.26a8.8 8.8 0 0 1-6.87 6.43z"></path>
                </symbol>
                <symbol id="iconBoxReturn" viewBox="0 0 38 32">
                    <title>return-box2</title>
                    <path d="M18.92 21.35l-.48-.73v10.43l1.11-.74L1.3 22.5l.49.74V12.8l-1.12.73 18.25 7.82zM.19 12.8v10.43c0 .32.19.6.49.73l18.24 7.82a.8.8 0 0 0 1.12-.73V20.62a.8.8 0 0 0-.49-.74L1.31 12.06a.8.8 0 0 0-1.12.74z"></path>
                    <path d="M37.8 23.96a.8.8 0 0 0 .48-.73V12.8a.8.8 0 0 0-1.11-.74l-18.25 7.82a.8.8 0 0 0-.48.74v10.43a.8.8 0 0 0 1.11.73l18.25-7.82zm-17.76 7.08V20.63l-.49.73 18.25-7.82-1.11-.73v10.42l.48-.73-18.25 7.82 1.12.73z"></path>
                    <path d="M24.45 18.01l7.82-3.26v3.62a2.6 2.6 0 0 1-1.47 2.2l-4.88 2.04c-.81.34-1.47-.11-1.47-.98v-3.62zm4.23-9.86a.8.8 0 0 0-.63 1.47l9.12 3.91a.8.8 0 1 0 .63-1.47l-9.12-3.91zM10.43 9.62a.8.8 0 1 0-.63-1.47L.67 12.06a.8.8 0 1 0 .63 1.47l9.13-3.9zm8.16-5.1l1.08.68.1.03c1.94 0 3.26 1.49 3.26 3.57a3.53 3.53 0 0 1-3.58 3.58v.36a5.7 5.7 0 0 0 5.7-5.7c0-3.22-2.3-5.74-5.39-5.74l-.14.06-1.44 1.8.14-.06h-.72c-.16 0-.24.2-.13.3l1.09 1.09.03.02zm.22-.29l-1.08-1.08-.13.31h.72l.14-.07 1.44-1.8-.14.07c2.89 0 5.03 2.35 5.03 5.38a5.33 5.33 0 0 1-5.34 5.34c-.24 0-.24.36 0 .36A3.89 3.89 0 0 0 23.4 8.8c0-2.27-1.47-3.93-3.63-3.93l.1.02-1.08-.68.03.02zm.92-4.05v6.49L20 6.5l-6.48-3.25v.32L19.99.34l-.26-.16zm.36 0a.18.18 0 0 0-.26-.16l-6.48 3.24a.18.18 0 0 0 0 .32l6.48 3.24c.12.06.26-.02.26-.16V.18z"></path>
                    <path d="M19.91 5.05c2.03.07 3.3 1.69 3.3 3.75a3.7 3.7 0 0 1-3.76 3.76 5.51 5.51 0 0 0 5.52-5.52c0-3-2.08-5.48-5.06-5.56V.18l-6.48 3.24 6.49 3.25V5.05z"></path>
                </symbol>

            </svg>

            <div className="f936e5" itemType="http://schema.org/IndividualProduct">
                <div className="slick-initialized slick-slider PDPslideshow PDPslideshow--default sliderArrows data-tstid-slideshow">
                    <div className="slick-arrow slick-prev" role="presentation">
                        <button className="_315884 afa822 _4b1322" aria-label="Switch to prev slide" data-tstid="sliderArrowPrev">
                            <svg className="_1a2756">
                                <use xlinkHref="#iconArrowThinLeft"></use>
                            </svg>
                        </button>
                    </div>
                    <div className="slick-list">
                        <div className="slick-track">
                            <div role="button" data-index="0" className="slick-slide slick-active " tabIndex="-1" ><img className="slick-img loaded" src={`${ this.props.mainPiece }`} alt={`${ this.props.Brand + ' ' + this.props.Product}`}/></div>
                            <div role="button" data-index="1" className="slick-slide slick-active slick-current" tabIndex="-1" ><img className="slick-img loaded" src={`${ this.props.mainLook }`} alt={`${ this.props.Brand + ' ' + this.props.Product}`}/></div>

                     
                        </div>
                    </div>
                    <div className="slick-arrow slick-next" role="presentation">
                        <button className="_315884 afa822 _4b1322" aria-label="Switch to next slide" data-tstid="sliderArrowNext">
                            <svg className="_1a2756">
                                <use xlinkHref="#iconArrowThinRight"></use>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="f5bff7 _65c5b8" aria-hidden="true" data-active="0" data-tstid="slideshowBullets"><span className="dd897c d575a9" data-tstid="bullet"></span><span className="dd897c" data-tstid="bullet"></span><span className="dd897c" data-tstid="bullet"></span><span className="dd897c" data-tstid="bullet"></span><span className="dd897c" data-tstid="bullet"></span></div>
                <div>
                    <meta itemProp="image" content=""/>
                    <meta itemProp="image" content=""/>
                    <meta itemProp="image" content=""/>
                    <meta itemProp="image" content=""/>
                    <meta itemProp="image" content=""/>
                </div>
                <span className="PDPslideshow-btnZoom"><button className="_315884 a66299 _4b1322" data-tstid="magnify" aria-label="Zoom In Slideshow images"><svg className="_1a2756"><use xlinkHref="#iconMagnifyingGlass"></use></svg></button></span>
                
                

              

                <AnchorLink offset='180' href='#STL'>{this.props.ViewTheLookButton}</AnchorLink>


                
                <div className="_9d7de2" aria-label="[Product information]" data-tstid="productOffer">
                    <div className="cdb2b6" id="bannerComponents-Container">
                        <p className="_41db0e _527bd9 eda00d" data-tstid="merchandiseTag"></p>
                        <div className="_1c3e57">
                            <h1 className="_61cb2e" itemProp="brand" itemScope="" itemType="http://schema.org/Brand"><a href="#" className="fd9e8e e484bf _4a941d f140b0" data-trk="pp_infobrd" data-tstid="cardInfo-title" itemProp="url" aria-label='{this.props.Brand}'><span itemProp="name">{this.props.Brand}</span></a></h1></div>
                    </div>
                    <div className="_6dca1b">
                      <span className="_62e534" itemProp="name" data-tstid="cardInfo-description" data-attribute="13431381" aria-hidden="true">{this.props.Product}</span>
                      <span>
                      <meta itemProp="description" content={`${ this.props.Description }`}/>
                      <meta itemProp="productID" content="13431381"/>
                      <meta itemProp="color" content="Brown"/>
                      </span>
                    </div>
                    <div className="bc2ed6" data-tstid="priceInfo-priceInfo" itemProp="offers" itemScope="" itemType="http://schema.org/Offer"><span><strong data-tstid="priceInfo-original" className="d9c839 _62e534">{ this.props.Price }</strong>
                    <small className="_840e33 eda00d" data-tstid="dutiesInformation" dir="LTR">VAT included </small></span>
                        <meta itemProp="price" content={`${ this.props.Price }`}/>
                        <meta itemProp="priceCurrency" content="GBP"/>
                        <link itemProp="itemCondition" href="http://schema.org/NewCondition"/>
                        <link itemProp="availability" href="http://schema.org/InStock"/>
                    </div>
                    <div className="bcd0ad">
                        <div className="_29c35d">
                            <div className="fp-root ng-scope" data-product-id="13431381" data-placement="default" id="FitPredictor-13431381" fp-root="">
                              
                            </div>
                        </div>
                        <div className="_0e3223">
                            <button className="e2deae _315884 _557b5d d4f875" id="sizeGuideTrigger" data-tstid="sizeGuideLink">Size Guide</button>
                        </div>
                    </div>
                    <div id="sizesDropdown" data-tstid="sizeDropDown" className="ea4960 ">
                        <div>
                            
                            <select id="dropdown" aria-label="Sizes dropdown" className="a0736c ">
                                <option disabled="" value="default">Select size - {this.props.ScaleName}</option>
                                <option value="17">32 FR </option>
                                <option value="18">34 FR </option>
                                <option value="19">36 FR </option>
                            </select>
                            <div id="sizesDropdownTrigger" aria-hidden="true" className="e3d64b  "><span className="_1ccaf6"><span data-tstid="collapsedText">Select size<span data-tstid="scaleFriendlyName" className="c0387f">{this.props.ScaleName}</span></span>
                                </span>
                                <svg className="_209490">
                                    <use xlinkHref="#iconArrowSolidDown"></use>
                                </svg>
                            </div>
                            <div data-tstid="sizesDropdownResults" aria-hidden="true" className="a4d261  ">
                                <div id="" data-tstid="sizesDropdownOverlay" className="_1bd9b6" data-closemodal=""></div>
                                <div className="fc3200">
                                    <button type="button" data-tstid="close-mobile-dropdown" className="c4009e" aria-label="[Close price selector]">
                                        <svg className="d4f43f">
                                            <use xlinkHref="#iconCross"></use>
                                        </svg>
                                    </button>
                                    <div>
                                        <div>
                                            <button className="_315884 _08896a _4b1322 _3964f8" data-tstid="addToBagDropDown">Add to bag
                                                <svg className="_1a2756">
                                                    <use xlinkHref="#iconBag"></use>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div data-tstid="addToBagError" className="e8cb64 ">Please select a size</div>
                                <div className="_15919d">
                                    <div className="_99335b " data-value="17" data-tstid="sizesDropdownRow"><span><span className="_9222cc" data-tstid="sizeDescription">32</span><span data-tstid="sizeScale">FR</span><span className="_2d4dc1 "></span></span><span><span className="_2d4dc1 d63d54" data-tstid="lastOneLeftLabel"></span></span>
                                    </div>
                                    <div className="_99335b " data-value="18" data-tstid="sizesDropdownRow"><span><span className="_9222cc" data-tstid="sizeDescription">34</span><span data-tstid="sizeScale">FR</span><span className="_2d4dc1 "></span></span><span><span className="_2d4dc1 d63d54" data-tstid="lastOneLeftLabel"></span></span>
                                    </div>
                                    <div className="_99335b " data-value="19" data-tstid="sizesDropdownRow"><span><span className="_9222cc" data-tstid="sizeDescription">36</span><span data-tstid="sizeScale">FR</span><span className="_2d4dc1 "></span></span><span><span className="_2d4dc1 d63d54" data-tstid="lastOneLeftLabel"></span></span>
                                    </div>
                                    <button className="_99335b _82c3c7" data-tstid="notifyStock"><span className="_23071b"> Size missing? Be notified when it's back in </span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" b404ea">
                        <div className="_3577a3" data-tstid="stickyBar">
                            <div className="c0b727">
                                <button className="_315884 _08896a _4b1322 _3964f8" data-tstid="addToBag" data-trk="addToBag">Add to bag
                                    <svg className="_1a2756">
                                        <use xlinkHref="#iconBag"></use>
                                    </svg>
                                </button>
                            </div>
                            <div className="_317fae">
                                <div className="ec986b">
                                    <button className="_315884 _96062e _4b1322 _3964f8" aria-pressed="false" aria-label="[Add to wishlist]" data-tstid="addToWishlist" data-trk="addToWishlist"><span className="_6ffce6">Wishlist</span>
                                        <svg className="_1a2756">
                                            <use xlinkHref="#iconStar"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="f6d2cf">
                        <div className="_41b662" data-tstid="sameStyleProducts">
                            <p className="_42dd12 eda00d" data-tstid="sameStyleProductsText">Also available in</p>
                            <div className="e82b95" data-tstid="sameStyleImagesBox">
                                <a href="#" className="c479f7" data-ffref="pp_pa"><img src="https://cdn-images.farfetch-contents.com/13/13/80/69/13138069_14430854_1000.jpg" alt={`${ this.props.Brand + ' ' + this.props.Product}`} className="_66f011"/></a>
                            </div>
                        </div>
                    </div>
                    <div id="qubitContainer"></div>
                </div>
            </div>

        </div>
    </div>


      </Layout>

    );
    }
}

export default Product;