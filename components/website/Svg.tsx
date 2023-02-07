const cls1 = {
  fill: '#f2f2f2',
  // e6e6e6
}
const cls2 = {
  fill: '#fff',
}
const cls3 = {
  fill: '#3f3d56',
}
const cls4 = {
  fill: '#ccc',
}
const cls5 = {
  fill: '#2f2e41',
}

interface Props {
  type: 'people' | 'search' | 'phone'
  color: string
}

export default function SvgPeople(props: Props) {
  if (props.type == 'people') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 808.47 567.04">
        <path
          style={cls1}
          d="M469.11,554.42A90.31,90.31,0,0,1,449.72,565c-1.8.72-3.61,1.39-5.45,2H350.34c-.38-.66-.75-1.33-1.13-2-7.62-13.64-14.53-27.81-16.49-43.22-2.35-18.5,4.24-39.45,20.53-48.54a32.14,32.14,0,0,1,6.74-2.82c1-.3,2-.54,3-.75a35.22,35.22,0,0,1,40.95,45.78c13.81-14.16,11.23-37.12,6.47-56.31s-10.55-40.55-.84-57.79c5.39-9.59,14.88-15.54,25.52-17.94l1-.2A51.44,51.44,0,0,1,473,389.68c20.36,12.82,30.81,37.15,34.2,61C512.63,489,500.53,531.77,469.11,554.42Z"
        />
        <path
          style={cls2}
          d="M370.32,481.89a79.14,79.14,0,0,1,6.84,49.29,81.25,81.25,0,0,1-15,33.82c-.51.68-1,1.35-1.56,2h-3.71c.57-.65,1.13-1.32,1.66-2a76.55,76.55,0,0,0,1.4-94.58c1-.3,2-.54,3-.75A81.1,81.1,0,0,1,370.32,481.89Z"
        />
        <path
          style={cls2}
          d="M460.18,493a87.07,87.07,0,0,1-6,24.62,76.16,76.16,0,0,1-11.78,19.24c-9.93,11.95-23.07,20.94-37.34,26.92q-1.56.66-3.15,1.26c-1.84.72-3.7,1.38-5.57,2H386.18c2.39-.6,4.77-1.27,7.12-2a119.07,119.07,0,0,0,16.31-6.43,90.53,90.53,0,0,0,33.88-27.79C453,517.72,457.17,502,457.89,486c.76-17.13-1.47-34.57-5.38-51.24a214.8,214.8,0,0,0-18.07-49.23,1.56,1.56,0,0,1,.61-2,1.35,1.35,0,0,1,1-.2,1.14,1.14,0,0,1,.76.64c1,1.93,2,3.86,2.89,5.81a217.65,217.65,0,0,1,17,51.08C460.14,457.78,462,475.61,460.18,493Z"
        />
        <path
          style={cls3}
          d="M42.47,283a42,42,0,1,1,42-42A42,42,0,0,1,42.47,283Zm0-82a40,40,0,1,0,40,40A40,40,0,0,0,42.47,201Z"
        />
        <path
          style={cls3}
          d="M212.47,148a42,42,0,1,1,42-42h0A42,42,0,0,1,212.47,148Zm0-82a40,40,0,1,0,40,40A40,40,0,0,0,212.47,66Z"
        />
        <path
          style={cls3}
          d="M394.47,84a42,42,0,1,1,42-42A42,42,0,0,1,394.47,84Zm0-82a40,40,0,1,0,40,40A40,40,0,0,0,394.47,2Z"
        />
        <path
          style={cls3}
          d="M588.47,150a42,42,0,1,1,42-42A42,42,0,0,1,588.47,150Zm0-82a40,40,0,1,0,40,40A40,40,0,0,0,588.47,68Z"
        />
        <path
          style={cls3}
          d="M766.47,251a42,42,0,1,1,42-42,42,42,0,0,1-42,42Zm0-82a40,40,0,1,0,40,40A40,40,0,0,0,766.47,169Z"
        />
        <polygon
          style={cls4}
          points="555.8 539.63 566.81 545.03 592.86 505.14 576.61 497.17 555.8 539.63"
        />
        <path
          style={cls5}
          d="M554.75,534.66l21.68,10.63h0a15.39,15.39,0,0,1,7.05,20.59h0l-.22.45-35.5-17.4Z"
        />
        <polygon
          style={cls4}
          points="664.89 558.44 677.15 558.44 682.99 511.15 664.89 511.15 664.89 558.44"
        />
        <path style={cls5} d="M661.77,550.44h24.14a15.39,15.39,0,0,1,15.39,15.39h0v.5H661.77Z" />
        <circle style={cls4} cx="638.56" cy="207.53" r="24.56" />
        <path
          style={cls5}
          d="M663,542.85a4.49,4.49,0,0,1-4.49-4.31L649,412.18a1.49,1.49,0,0,0-1.53-1.45h0a1.52,1.52,0,0,0-1.28.8l-60.73,116a4.51,4.51,0,0,1-6,1.93L562.54,521a4.51,4.51,0,0,1-2-6l36.24-73.43,24-55c9.27-18.24,19.11-27.65,30.08-28.75,11.26-1.12,23.28,6.62,36.76,23.67l.11.14v.18l-2,154.35a4.48,4.48,0,0,1-4.08,4.48l-18.17,2.26Z"
        />
        <path
          style={cls4}
          d="M612.64,395.38a10.75,10.75,0,0,0,3.5-14.79,9.8,9.8,0,0,0-1.14-1.51l3.71-97.86-18,2.24-1.52,95.2a10.8,10.8,0,0,0,13.45,16.72Z"
        />
        <path
          className={props.color}
          d="M624,298.52l-24.17-2.75a4.81,4.81,0,0,1-4.24-5.32h0a4.19,4.19,0,0,1,.13-.69L602,266.31a13.38,13.38,0,0,1,26.57,3.1l.83,24.16a4.82,4.82,0,0,1-4.63,5h0a4.21,4.21,0,0,1-.71,0Z"
        />
        <path
          style={cls4}
          d="M728.15,236.92a11.38,11.38,0,0,0-.24,1.64l-43,24.78-10.44-6-11.13,14.58,17.45,12.43a8,8,0,0,0,9.6-.23l44.29-35a10.5,10.5,0,1,0-6.2-13.49h0a11.16,11.16,0,0,0-.37,1.25Z"
        />
        <path
          className={props.color}
          d="M683.52,264.52l-13.89,18a4.5,4.5,0,0,1-6.31.82,5.23,5.23,0,0,1-.49-.45l-15.72-16.32a12.5,12.5,0,0,1,15.33-19.74l19.71,11a4.51,4.51,0,0,1,1.73,6.13,6.49,6.49,0,0,1-.36.55Z"
        />
        <path
          className={props.color}
          d="M694.84,389.06,668.19,259.23a24.34,24.34,0,0,0-27.85-19.11l-8.89,1.48A23.78,23.78,0,0,0,616,251.26h0a33.25,33.25,0,0,0-5,28.31l14.71,52.65-10.92,56.41a4,4,0,0,0,3.16,4.69,3.72,3.72,0,0,0,1.33,0c5.46-.78,14.47-1.89,24.82-2.5l5.61-21.63L652,390.5c12.71-.35,26.51.27,37.9,3.23a4,4,0,0,0,4.94-2.77,4.07,4.07,0,0,0,.06-1.9Z"
        />
        <path
          style={cls5}
          d="M648,202.06c6.31,4.32,14.6,8.77,21,4.16,4.23-3,5.57-8.61,3.85-13.52-3.09-8.83-11.57-12.72-19.68-15.69-10.55-3.88-22-7-32.91-4.19s-20.51,13.32-18.54,24.38c1.58,8.89,10,16.29,8.78,25.25s-11.34,13.75-20.29,15.36-19,2.13-25.39,8.56c-8.2,8.2-6.15,22.85,1.57,31.51s19.36,12.58,30.65,15.25c15,3.53,31.13,5.39,45.33-.48s25.26-21.65,21.15-36.46c-1.74-6.25-5.84-11.54-9.79-16.68s-8-10.53-9.48-16.84c-1.25-5.26-.32-11.37,3.17-15.32a4.42,4.42,0,0,0,.59-5.18Z"
        />
        <polygon
          style={cls4}
          points="163.17 553.73 151.24 550.92 156.4 503.55 174.01 507.7 163.17 553.73"
        />
        <path
          style={cls5}
          d="M163.49,566,125,557l.11-.49A15.4,15.4,0,0,1,143.59,545h0l23.5,5.53Z"
        />
        <polygon
          style={cls4}
          points="209.67 554.13 197.41 554.13 191.58 506.84 209.67 506.84 209.67 554.13"
        />
        <path style={cls5} d="M212.8,566H173.27v-.5a15.39,15.39,0,0,1,15.38-15.38H212.8Z" />
        <path
          style={cls4}
          d="M275.88,367.12a10.73,10.73,0,0,0-3.53-14.77h0a10.64,10.64,0,0,0-1.69-.84l-35.9-91-20,12.13,41.57,85.66a10.8,10.8,0,0,0,19.53,8.86Z"
        />
        <path
          className={props.color}
          d="M242.38,275.53,219.57,284a4.81,4.81,0,0,1-6.19-2.83h0a5.31,5.31,0,0,1-.2-.68l-5-23.74a13.37,13.37,0,0,1,25.11-9.21l11.63,21.19a4.8,4.8,0,0,1-1.89,6.53h0a4.22,4.22,0,0,1-.65.3Z"
        />
        <path
          style={cls5}
          d="M208.86,537.16h-.18l-17.38-.69a4.48,4.48,0,0,1-4.3-4.57l1.33-96a1.5,1.5,0,1,0-3-.18h0l-10.08,96.11a4.53,4.53,0,0,1-3.74,4h-.06l-16.31-1.29a4.5,4.5,0,0,1-5.13-3.77h0a5.49,5.49,0,0,1,0-.7l1-162.78,80,5.07L213.33,533.15A4.53,4.53,0,0,1,208.86,537.16Z"
        />
        <circle style={cls4} cx="194.22" cy="200.61" r="24.56" />
        <path
          className={props.color}
          d="M227,379.5h-.34l-74-5.41a4.52,4.52,0,0,1-4.17-4.58l1.95-92.91a41.91,41.91,0,0,1,83.8-1.92,41.19,41.19,0,0,1-.16,4.71c-1.29,14.32-2.32,76.87-2.6,95.7A4.5,4.5,0,0,1,227,379.5Z"
        />
        <path
          style={cls4}
          d="M95.15,228.19a9.14,9.14,0,0,1,.24,1.64l43,24.78,10.44-6L160,263.19l-17.45,12.43a8,8,0,0,1-9.6-.23l-44.33-35a10.5,10.5,0,1,1,6.2-13.49h0a11.16,11.16,0,0,1,.37,1.25Z"
        />
        <path
          className={props.color}
          d="M138.94,252.14a4.49,4.49,0,0,1,2.21-3l19.71-11a12.5,12.5,0,0,1,15.33,19.74L160.47,274.2a4.49,4.49,0,0,1-6.35.13h0a3.42,3.42,0,0,1-.44-.49l-13.88-18A4.52,4.52,0,0,1,138.94,252.14Z"
        />
        <path style={cls3} d="M808,566a1,1,0,0,1-1,1H1a1,1,0,0,1,0-2H807A1,1,0,0,1,808,566Z" />
        <path d="M417.51,37.54a27,27,0,0,1,.46,5C418,56.25,408.79,66,395,66a24,24,0,0,1,0-48,23,23,0,0,1,16,6.29L404.21,31h0a13.13,13.13,0,0,0-9.28-3.63,14.62,14.62,0,0,0,0,29.24c7.19,0,12.08-4.11,13.08-9.75H394.93V37.54Z" />
        <path d="M790.47,207.47v.73a2.76,2.76,0,0,1-.07.76c-.09.91-.11,1.84-.28,2.74a23.69,23.69,0,0,1-14.31,18.2c-1.15.52-2.38.86-3.58,1.28l-1.76-3.38.55.2c1.31.41,2.62.84,4,1.2.66.18.9,0,1-.65a18.55,18.55,0,0,0,.19-3.07,23,23,0,0,0-.45-3.32c-.12-.6-.43-.72-1-.47a16.33,16.33,0,0,0-1.76.92c-.89.55-1.76,1.16-2.67,1.76,0-.59-.49-.61-.92-.63a1.7,1.7,0,0,0-.45,0c-.29.07-.41-.07-.49-.33-.36-1.09-.77-2.16-1.09-3.26a14.08,14.08,0,0,1-.62-5.12,5.31,5.31,0,0,1,.11-.8A29.07,29.07,0,0,0,772,216a12.08,12.08,0,0,0,10-1.18,2.53,2.53,0,0,0,.72-.7.63.63,0,0,0-.06-.9.6.6,0,0,0-.48-.16,3.31,3.31,0,0,0-.77,0c-1.16.23-2.32.49-3.49.73a15.09,15.09,0,0,1-5.56.28,4.74,4.74,0,0,1-2.21-.84,1.44,1.44,0,0,1-.43-2h0a1.45,1.45,0,0,1,1.42-.64,1.76,1.76,0,0,1,.64.08,8.11,8.11,0,0,0,4.39-.3c.8-.3,1.62-.51,2.41-.82,1.75-.66,3.5-1.39,5.23-2.17a4.11,4.11,0,0,0,1.09-.76.68.68,0,0,0,.24-.93l0-.07a.71.71,0,0,0-.36-.28,4.69,4.69,0,0,0-3.39-.36c-1.65.46-3.28,1-4.93,1.46-.59.17-1.19.29-1.83.45v-.3a19.65,19.65,0,0,0,.06-2.66,17.93,17.93,0,0,0-2.77-7.54,7.16,7.16,0,0,0-5-3.56.85.85,0,0,1-.42-.22c-.39-.36-.73-.76-1.15-1.08A12.82,12.82,0,0,0,758,189c-.92,0-1.84.06-2.76.1v.15l1.68,1.09-.45.15-1.17.34c-.49.15-.6.36-.47.87a13.27,13.27,0,0,1,6.44.94.78.78,0,0,1-.36.13,12.5,12.5,0,0,0-4.16,1.41,5.2,5.2,0,0,0-2.06,2.15,6.69,6.69,0,0,0-.81,3c0,1-.06,2.1,0,3.13a24.87,24.87,0,0,0,.46,2.58c.28,1.47.56,2.94.85,4.41s.63,2.92.93,4.39c.4,1.89.78,3.79,1.18,5.68.28,1.34.57,2.7.86,4.08l.87,4.08c.22,1,.43,2.07.66,3.18l-1.46-.54a24,24,0,0,1-15.52-19.43c-.1-.77-.16-1.56-.24-2.33V207.1a1.09,1.09,0,0,1,.06-.44c.17-1.3.24-2.62.51-3.89a23.93,23.93,0,0,1,27.28-18.63A23.18,23.18,0,0,1,783,190.46a23.53,23.53,0,0,1,7.29,14.39C790.35,205.72,790.39,206.6,790.47,207.47Z" />
        <path d="M761.41,204a1.75,1.75,0,1,1-1.73-1.79,1.75,1.75,0,0,1,1.73,1.79Z" />
        <path d="M773,202.9a1.5,1.5,0,0,1-1.46,1.54h0a1.5,1.5,0,1,1,1.5-1.54Z" />
        <path d="M760,198.74a3.14,3.14,0,0,0-3.74,1.62,1.37,1.37,0,0,1,.59-1.61A2.49,2.49,0,0,1,760,198.74Z" />
        <path d="M765.86,225.11v2.15a2.67,2.67,0,0,0,0,.4c.16.7.44.91,1.22.93a6.81,6.81,0,0,0,2.76-.32v.09a2.61,2.61,0,0,1-.52.28,6.34,6.34,0,0,1-2.8.3,1.06,1.06,0,0,1-.88-1v-2.19A3.72,3.72,0,0,1,765.86,225.11Z" />
        <path d="M768.89,198.65a1.6,1.6,0,0,1,1.48-1.11,2,2,0,0,1,2,1.11A3.39,3.39,0,0,0,768.89,198.65Z" />
        <path d="M612.47,85.72c-.12.31-.24.63-.37.94L609,94.05l-2.1,5c-.73,1.77-1.45,3.53-2.18,5.29-.48,1.15-1,2.3-1.43,3.46a.19.19,0,0,1-.2.12H593v-.14c.59-1.41,1.17-2.83,1.76-4.25l2.36-5.69c.55-1.34,1.1-2.67,1.66-4,.87-2.11,1.75-4.23,2.62-6.35l.76-1.8Z" />
        <path d="M564.47,96.61h9.2a.23.23,0,0,1,.26.18l2.91,7.46,1.7,4.32.85,2.19.08.24.26-.63,1.58-4,2.34-5.93,1.47-3.73c0-.1.11-.1.19-.1h9c-.1.26-.19.49-.29.72l-2.88,7L588.36,111l-2.82,6.81-2.62,6.35-1.68,4.05c-.27.66-.55,1.32-.82,2l-.13.09H571.2q.16-.42.33-.81c1.1-2.59,2.19-5.19,3.3-7.78a.72.72,0,0,0,0-.67q-1.23-2.83-2.36-5.64c-.7-1.53-1.34-3.06-2-4.58l-2.33-5.53-1.95-4.6c-.57-1.33-1.13-2.69-1.72-4Z" />
        <path d="M589.85,116a5.81,5.81,0,0,1,5.79-5.83h0a6,6,0,0,1,1.46.18,5.34,5.34,0,0,1,3.74,3.2,5.52,5.52,0,0,1,.34,3.4,5.66,5.66,0,0,1-3.06,4,5.76,5.76,0,0,1-3.19.59,5.37,5.37,0,0,1-3.43-1.59,5.54,5.54,0,0,1-1.65-3.54v-.29Z" />
        <path d="M66.34,262.88c-.42-.82-.86-1.62-1.28-2.43l-2.59-4.95a2.76,2.76,0,0,1-.33-.72s-.1-.15,0-.58c0,0,.06-.12.11-.24a.82.82,0,0,1-.1.26v.06a5.47,5.47,0,0,1,.67-1.11c.19-.32.38-.65.55-1l.36-.69A21.9,21.9,0,0,0,65.15,248a25.89,25.89,0,0,0-.55-16,22.67,22.67,0,0,0-9.44-11.14c-.25-.15-.51-.29-.76-.42l-.12-.1h0l-.69-.34c-.3-.1-.61-.19-.91-.27a3.69,3.69,0,0,1,.79.27,23.3,23.3,0,0,0-5.33-1.88,22.46,22.46,0,0,0-3.26-.57,26.57,26.57,0,0,0-4.72,0,23.69,23.69,0,0,0-7.93,2A24.14,24.14,0,0,0,25.52,224a22.3,22.3,0,0,0-4.76,6.59,23.13,23.13,0,0,0-2.1,7.14,4.69,4.69,0,0,0,0,.53h0a4.69,4.69,0,0,0,0,.53,11.75,11.75,0,0,0,.14,1.33c-.1-.62-.16-1.25-.2-1.88v.06a27.34,27.34,0,0,0,.44,8.32A23.6,23.6,0,0,0,22.12,254a22.52,22.52,0,0,0,12.13,9.29,27.62,27.62,0,0,0,4.12.94,21.4,21.4,0,0,0,4,.25c1.29-.05,2.56-.16,3.83-.33.71-.11,1.4-.24,2.09-.41s1.22-.25,1.44-.88a1.61,1.61,0,0,0-.26-1.31c-.27-.52-.52-1.05-.79-1.57v-.11c-.5-1-1-2.05-1.54-3.07a1.06,1.06,0,0,0-.67-.62h-.11a2,2,0,0,0-.69.06c-.35.06-.68.13-1,.17a15.06,15.06,0,0,1-4.24,0,15.5,15.5,0,0,1-13.5-17.17v-.17h0v-.58h0a16.07,16.07,0,0,1,2.78-6.58,17,17,0,0,1,2.56-2.73A15.56,15.56,0,0,1,43.7,225.6a15.91,15.91,0,0,1,6.3,1.94l.22.13h.08l.4.25a15.73,15.73,0,0,1,4.79,4.75,15.52,15.52,0,0,1,1.2,14.47,13.69,13.69,0,0,1-1.2,2.23,15.25,15.25,0,0,1-2.79,3.26,1.63,1.63,0,0,0-.58.72,1.13,1.13,0,0,0,0,.81L56.54,263c.22.46.44,1.13.91,1.4a2.18,2.18,0,0,0,1.1.14h6.81a1.13,1.13,0,0,0,1.12-1.13h0A.9.9,0,0,0,66.34,262.88Z" />
        <path d="M231.14,111.24a13.52,13.52,0,0,1-.08,1.42,13,13,0,0,1-3.39,7.41,5.69,5.69,0,0,0,.62-.84,3.72,3.72,0,0,0,.38-.71,1.89,1.89,0,0,0,.11-.25l.09-.25a.35.35,0,0,1,.07-.24,2.33,2.33,0,0,0,.07-.25h0v-.25a.48.48,0,0,1,.05-.26h0v-.82a5.86,5.86,0,0,0-.82-3c-.12-.2-.26-.4-.4-.59a8.24,8.24,0,0,0-.56-.62,5.94,5.94,0,0,0-1.73-1.15,4.48,4.48,0,0,0-.87-.3h-.11l-1.51-.52h0l-3.95-1.36h0l-.25-.09a3.68,3.68,0,0,1-1.86-1.64l-1.44-3.68L214,99l-.32-.82L213.6,98a1.94,1.94,0,0,1-.13-.71v-.19a1.84,1.84,0,0,1,1.84-1.65,2,2,0,0,1,.71.14l7.37,3.78,1.45.74a13,13,0,0,1,6.31,10.25v.86Z" />
        <path d="M229.17,116.16a6.59,6.59,0,0,1-.1,1.09l-.06.28a1.71,1.71,0,0,1-.14.49l-.09.25a.62.62,0,0,1-.11.25,6,6,0,0,1-.37.71,6.57,6.57,0,0,1-.63.84c-1.08,1.19-4.72,3.3-6.07,4.16l-3,1.82a13.28,13.28,0,0,1-6.85,2.37h-.86A13,13,0,0,1,198.52,117a5.76,5.76,0,0,0,6.71,4.6,5.92,5.92,0,0,0,1.68-.6h0l.29-.17,1.19-.7,1.51-.9h0l.19-.12,13.52-8,1-.61h.11a5.22,5.22,0,0,1,.87.29,6,6,0,0,1,1.73,1.16,5.41,5.41,0,0,1,.55.62,4.7,4.7,0,0,1,.4.59,5.75,5.75,0,0,1,.83,3Z" />
        <path d="M209.93,89.43v29.81l-1.51.9-1.19.7-.29.17h0a5.75,5.75,0,0,1-7.79-2.32,5.53,5.53,0,0,1-.6-1.68,1,1,0,0,0-.05-.38,3.23,3.23,0,0,1,0-.7V82.35a1.94,1.94,0,0,1,1.92-1.93,2,2,0,0,1,1.08.33l5.88,3.84.1.07A5.77,5.77,0,0,1,210,89.43Z" />
        <path
          style={cls5}
          d="M215.45,217c-4.58,4.88-13.09,2.26-13.69-4.41a8.13,8.13,0,0,1,0-1.56c.31-2.95,2-5.63,1.6-8.75a4.52,4.52,0,0,0-.84-2.15c-3.65-4.89-12.22,2.19-15.66-2.24-2.12-2.71.37-7-1.25-10-2.14-4-8.48-2-12.46-4.22-4.42-2.44-4.16-9.22-1.25-13.35,3.56-5,9.78-7.72,15.93-8.11s12.25,1.28,18,3.51c6.52,2.54,13,6.06,17,11.79,4.88,7,5.35,16.35,2.91,24.5C224.26,207,219.19,213.05,215.45,217Z"
        />
      </svg>
    )
  } else if (props.type == 'search') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 643 447.57">
        <path
          style={cls3}
          d="M613.07,87.06H29.93A30,30,0,0,1,0,57.14V29.93A30,30,0,0,1,29.93,0H613.07A30,30,0,0,1,643,29.93V57.14A30,30,0,0,1,613.07,87.06ZM29.93,1.81A28.16,28.16,0,0,0,1.81,29.93V57.14A28.15,28.15,0,0,0,29.93,85.25H613.07a28.15,28.15,0,0,0,28.12-28.11V29.93A28.16,28.16,0,0,0,613.07,1.81Z"
        />
        <rect style={cls1} x="57.14" y="26.3" width="421.71" height="34.46" rx="17.23" />
        <rect
          className={props.color}
          x="107.92"
          y="177.43"
          width="421.71"
          height="34.46"
          rx="17.23"
        />
        <rect style={cls1} x="107.92" y="287" width="421.71" height="34.46" rx="17.23" />
        <rect style={cls1} x="107.92" y="396.58" width="421.71" height="34.46" rx="17.23" />
        <path
          className={props.color}
          d="M586.31,62.15a2.71,2.71,0,0,1-3.78.66l-14.8-10.3a2.71,2.71,0,0,1,3.11-4.45h0l14.81,10.31A2.72,2.72,0,0,1,586.31,62.15Z"
        />
        <path
          className={props.color}
          d="M569.5,50.44a19.26,19.26,0,1,1-4.73-26.83h0A19.28,19.28,0,0,1,569.5,50.44ZM541.88,31.1A14.45,14.45,0,1,0,562,27.55,14.46,14.46,0,0,0,541.88,31.1Z"
        />
        <path
          style={cls3}
          d="M596.29,228.33H46.71a.91.91,0,1,1,0-1.81H596.29a.91.91,0,1,1,0,1.81Z"
        />
        <path style={cls3} d="M596.29,338H46.71a.91.91,0,1,1,0-1.81H596.29a.91.91,0,1,1,0,1.81Z" />
        <path
          style={cls3}
          d="M596.29,447.57H46.71a.91.91,0,1,1,0-1.81H596.29a.91.91,0,1,1,0,1.81Z"
        />
      </svg>
    )
  } else if (props.type == 'phone') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 738 729.05">
        <path
          style={cls1}
          d="M550.44,173h-4V63.4A63.41,63.41,0,0,0,483,0H251a63.4,63.4,0,0,0-63.4,63.4v601a63.4,63.4,0,0,0,63.4,63.4H483a63.41,63.41,0,0,0,63.41-63.4V250.92h4Z"
          transform="translate(0 0)"
        />
        <path
          style={cls2}
          d="M533,63.84V663.93a47.35,47.35,0,0,1-47.35,47.35H252.4a47.35,47.35,0,0,1-47.35-47.35V63.84A47.35,47.35,0,0,1,252.4,16.49h28.29a22.5,22.5,0,0,0,20.83,31h133a22.51,22.51,0,0,0,20.83-31H485.6A47.35,47.35,0,0,1,533,63.84Z"
          transform="translate(0 0)"
        />
        <path
          className={props.color}
          d="M304.6,181H268.79a11.15,11.15,0,0,1-11.13-11.13V134.1A11.15,11.15,0,0,1,268.79,123H304.6a11.13,11.13,0,0,1,11.13,11.13v35.81A11.14,11.14,0,0,1,304.6,181Z"
          transform="translate(0 0)"
        />
        <path
          style={cls1}
          d="M469.21,181H433.4a11.15,11.15,0,0,1-11.13-11.13V134.1A11.15,11.15,0,0,1,433.4,123h35.81a11.15,11.15,0,0,1,11.13,11.13v35.81A11.15,11.15,0,0,1,469.21,181Z"
          transform="translate(0 0)"
        />
        <path
          style={cls1}
          d="M304.6,272.55H268.79a11.15,11.15,0,0,1-11.13-11.13V225.61a11.14,11.14,0,0,1,11.13-11.13H304.6a11.13,11.13,0,0,1,11.13,11.13v35.81A11.14,11.14,0,0,1,304.6,272.55Z"
          transform="translate(0 0)"
        />
        <path
          style={cls1}
          d="M386.91,272.55H351.09A11.14,11.14,0,0,1,340,261.42V225.61a11.12,11.12,0,0,1,11.12-11.13h35.82A11.14,11.14,0,0,1,398,225.61v35.81A11.15,11.15,0,0,1,386.91,272.55Z"
          transform="translate(0 0)"
        />
        <path
          style={cls1}
          d="M469.21,272.55H433.4a11.15,11.15,0,0,1-11.13-11.13V225.61a11.14,11.14,0,0,1,11.13-11.13h35.81a11.14,11.14,0,0,1,11.13,11.13v35.81A11.15,11.15,0,0,1,469.21,272.55Z"
          transform="translate(0 0)"
        />
        <path
          style={cls1}
          d="M304.6,364H268.79a11.15,11.15,0,0,1-11.13-11.13V317.1A11.15,11.15,0,0,1,268.79,306H304.6a11.13,11.13,0,0,1,11.13,11.13v35.81A11.14,11.14,0,0,1,304.6,364Z"
          transform="translate(0 0)"
        />
        <path
          style={cls1}
          d="M386.91,364H351.09A11.14,11.14,0,0,1,340,352.91V317.1A11.13,11.13,0,0,1,351.09,306h35.82A11.15,11.15,0,0,1,398,317.1v35.81A11.15,11.15,0,0,1,386.91,364Z"
          transform="translate(0 0)"
        />
        <path
          style={cls1}
          d="M469.21,364H433.4a11.15,11.15,0,0,1-11.13-11.13V317.1A11.15,11.15,0,0,1,433.4,306h35.81a11.15,11.15,0,0,1,11.13,11.13v35.81A11.15,11.15,0,0,1,469.21,364Z"
          transform="translate(0 0)"
        />
        <path
          style={cls1}
          d="M304.6,455.55H268.79a11.15,11.15,0,0,1-11.13-11.13V408.61a11.14,11.14,0,0,1,11.13-11.13H304.6a11.13,11.13,0,0,1,11.13,11.13v35.81A11.14,11.14,0,0,1,304.6,455.55Z"
          transform="translate(0 0)"
        />
        <path
          style={cls1}
          d="M386.91,455.55H351.09A11.14,11.14,0,0,1,340,444.42V408.61a11.12,11.12,0,0,1,11.12-11.13h35.82A11.14,11.14,0,0,1,398,408.61v35.81A11.15,11.15,0,0,1,386.91,455.55Z"
          transform="translate(0 0)"
        />
        <path
          style={cls1}
          d="M469.21,455.55H433.4a11.15,11.15,0,0,1-11.13-11.13V408.61a11.14,11.14,0,0,1,11.13-11.13h35.81a11.14,11.14,0,0,1,11.13,11.13v35.81A11.15,11.15,0,0,1,469.21,455.55Z"
          transform="translate(0 0)"
        />
        <path
          className={props.color}
          d="M409.94,444.94H374.13a11.65,11.65,0,0,1-11.63-11.63V397.49a11.64,11.64,0,0,1,11.63-11.62h35.81a11.64,11.64,0,0,1,11.63,11.62v35.82A11.65,11.65,0,0,1,409.94,444.94Z"
          transform="translate(0 0)"
        />
        <path
          style={cls4}
          d="M240.5,537.35a10.34,10.34,0,0,0,4.65-13.86,9.61,9.61,0,0,0-1-1.56l7.74-75.61H235.21l-6.14,73.83a10.4,10.4,0,0,0,11.43,17.2Z"
          transform="translate(0 0)"
        />
        <circle style={cls4} cx="255.84" cy="380.95" r="23.65" />
        <path
          className={props.color}
          d="M260.29,490.35a4.34,4.34,0,0,1-4.17-3.17c-1.89-6.89-6.82-18.52-14.64-34.59a28.66,28.66,0,0,1,13.24-38.3,26.84,26.84,0,0,1,3-1.26h0a28.64,28.64,0,0,1,36.54,17.47l.26.77c6.06,19,5.77,39.39,5.36,47.27a4.33,4.33,0,0,1-3.4,4l-35.29,7.7A4.08,4.08,0,0,1,260.29,490.35Z"
          transform="translate(0 0)"
        />
        <polygon
          style={cls4}
          points="294.47 714.88 306.27 714.88 311.88 669.36 294.46 669.36 294.47 714.88"
        />
        <path
          style={cls5}
          d="M329,725.84H291.94V711.51H314.7A14.34,14.34,0,0,1,329,725.84Z"
          transform="translate(0 0)"
        />
        <polygon
          style={cls4}
          points="176.45 699.59 186.79 705.27 213.64 668.09 198.38 659.7 176.45 699.59"
        />
        <path
          style={cls5}
          d="M201.46,725.84,169,708h0l6.91-12.56h0l19.94,11a14.33,14.33,0,0,1,5.66,19.46Z"
          transform="translate(0 0)"
        />
        <path
          style={cls5}
          d="M293.91,689.62a4.34,4.34,0,0,1-4.29-3.78L274.86,572.1a2.4,2.4,0,0,0-4.49-.85l-61.52,111.6a4.34,4.34,0,0,1-5.33,2l-13.41-5.11a4.33,4.33,0,0,1-2.51-5.59l0-.09,42.61-104.68a3.51,3.51,0,0,0,.22-.83c5.77-44.67,20.46-67.39,24.82-73.29a3.36,3.36,0,0,0,.48-3.05l-.6-1.8a4.34,4.34,0,0,1,.83-4.22c15.72-17.9,43.13-8.13,43.4-8l.14.05.08.12c30.73,42.14,19.37,179,16.78,206a4.31,4.31,0,0,1-4,3.89l-18.17,1.4Z"
          transform="translate(0 0)"
        />
        <path
          style={cls4}
          d="M347.76,408.41a12,12,0,0,0-.23,1.58l-41.35,23.86-10.05-5.79-10.72,14,16.8,12a7.71,7.71,0,0,0,9.24-.23l42.64-33.64a10.11,10.11,0,1,0-6-13,10.37,10.37,0,0,0-.37,1.2Z"
          transform="translate(0 0)"
        />
        <path
          className={props.color}
          d="M304.8,435,291.43,452.3a4.33,4.33,0,0,1-6.08.79,6.29,6.29,0,0,1-.47-.43L269.75,437a12,12,0,0,1,14.75-19l19,10.61a4.34,4.34,0,0,1,1.67,5.9,6.06,6.06,0,0,1-.35.53Z"
          transform="translate(0 0)"
        />
        <path
          className={props.color}
          d="M253,465.08l-21.53-3.89a4.34,4.34,0,0,1-3.49-5,4.52,4.52,0,0,1,.15-.61l7-20.67a12,12,0,0,1,23.66,4.35L258.09,461a4.32,4.32,0,0,1-4.47,4.19,4.48,4.48,0,0,1-.63-.06Z"
          transform="translate(0 0)"
        />
        <path
          style={cls5}
          d="M259.58,375.51c6.08,4.16,14.06,8.43,20.27,4a11.28,11.28,0,0,0,3.7-13c-3-8.5-11.13-12.24-18.94-15.11-10.15-3.72-21.21-6.69-31.69-4s-19.74,12.82-17.84,23.46c1.52,8.57,9.59,15.69,8.45,24.31S212.62,408.37,204,409.92s-18.25,2.05-24.44,8.24c-7.9,7.89-5.93,22,1.5,30.34s18.65,12.11,29.51,14.67c14.4,3.41,30,5.19,43.65-.45s24.31-20.85,20.35-35.1c-1.67-6-5.62-11.11-9.43-16.06s-7.66-10.14-9.11-16.22c-1.21-5.06-.32-10.94,3-14.74a4.27,4.27,0,0,0,.57-5Z"
          transform="translate(0 0)"
        />
        <polygon
          style={cls4}
          points="500 716.46 487.74 716.46 481.91 669.17 500 669.17 500 716.46"
        />
        <path
          style={cls5}
          d="M479,713h23.65v14.88H464.1A14.88,14.88,0,0,1,479,713Z"
          transform="translate(0 0)"
        />
        <polygon
          style={cls4}
          points="546 716.46 533.74 716.46 527.91 669.17 546 669.17 546 716.46"
        />
        <path
          style={cls5}
          d="M525,713h23.65v14.88H510.1A14.88,14.88,0,0,1,525,713Z"
          transform="translate(0 0)"
        />
        <path
          style={cls4}
          d="M544.5,575.62a10.75,10.75,0,0,1-3.22-14.85,10.45,10.45,0,0,1,1.16-1.49l-8.07-114.56L557.62,447l.64,112.19a10.8,10.8,0,0,1-13.76,16.46Z"
          transform="translate(0 0)"
        />
        <path
          style={cls5}
          d="M499.42,692.64l-13.5-.65a4.5,4.5,0,0,1-4.28-4.46L480.7,551a4.5,4.5,0,0,1,4.47-4.53,5,5,0,0,1,.67,0l54,7.84a4.46,4.46,0,0,1,3.85,4.42l6.94,126.53a4.49,4.49,0,0,1-4.46,4.53H531.58a4.48,4.48,0,0,1-4.44-3.8l-9-57.06a3.5,3.5,0,0,0-6.93.12l-7.13,59.61a4.51,4.51,0,0,1-4.47,4Z"
          transform="translate(0 0)"
        />
        <path
          className={props.color}
          d="M508.92,558.75c-11.9-6.61-21.2-8.35-25.68-8.79a4.5,4.5,0,0,1-4-5.08l12.93-96.05a33.26,33.26,0,0,1,19.37-26A32.3,32.3,0,0,1,543,425.33c.45.3.88.6,1.31.91a33.18,33.18,0,0,1,12.64,34.57c-7.94,32.46-10.66,85.66-11.13,96a4.44,4.44,0,0,1-2.92,4,44.92,44.92,0,0,1-15.22,2.72A38.14,38.14,0,0,1,508.92,558.75Z"
          transform="translate(0 0)"
        />
        <path
          className={props.color}
          d="M539.63,483.21a4.5,4.5,0,0,1-1.86-3.4l-1.7-30.87A12.4,12.4,0,0,1,560.42,445l7.48,27.6a4.5,4.5,0,0,1-3.17,5.52l-21.29,5.78A4.46,4.46,0,0,1,539.63,483.21Z"
          transform="translate(0 0)"
        />
        <circle style={cls4} cx="519.74" cy="385.27" r="24.56" />
        <path
          style={cls4}
          d="M430.74,433.53a11,11,0,0,1,.24,1.64l43,24.78,10.44-6,11.13,14.57-22.34,15.92-49-38.66a10.55,10.55,0,1,1,6.58-12.24Z"
          transform="translate(0 0)"
        />
        <path
          className={props.color}
          d="M475.47,457.84a4.5,4.5,0,0,1,1.29-3.65l21.87-21.87a12.4,12.4,0,0,1,19.17,15.51l-15.57,24a4.51,4.51,0,0,1-6.23,1.32l-18.5-12A4.47,4.47,0,0,1,475.47,457.84Z"
          transform="translate(0 0)"
        />
        <path
          style={cls5}
          d="M537.12,404.7c-4.58,4.88-13.09,2.26-13.68-4.4a7.4,7.4,0,0,1,0-1.56c.3-2.95,2-5.64,1.6-8.75a4.52,4.52,0,0,0-.84-2.15C520.56,383,512,390,508.54,385.6c-2.11-2.72.37-7-1.25-10-2.14-4-8.48-2-12.45-4.22-4.42-2.44-4.16-9.23-1.25-13.36,3.55-5,9.78-7.72,15.93-8.1s12.25,1.27,18,3.51c6.52,2.54,13,6,17,11.79,4.88,7,5.35,16.34,2.91,24.5C545.93,394.66,540.87,400.72,537.12,404.7Z"
          transform="translate(0 0)"
        />
        <path
          style={cls3}
          d="M737,729.05H1a1,1,0,0,1,0-2H737a1,1,0,0,1,0,2Z"
          transform="translate(0 0)"
        />
      </svg>
    )
  } else {
    return <p>None</p>
  }
}
