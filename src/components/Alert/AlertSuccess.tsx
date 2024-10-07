import React from "react";

interface Props extends React.PropsWithChildren{
  show: boolean;
  type: string;
}

const AlertWarning: React.FC<Props> = ({show, type, children}) => {
  return (
    <>
      <div className='modal-backdrop show' style={{display: show ? 'block': "none"}}/>
      <div className='modal show' style={{display: show ? 'block': "none"}}>
        <div className="modal-dialog">
          <div className={`alert alert-${type}`}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertWarning;