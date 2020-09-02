import React, { ReactElement, FC, useState } from 'react'
import { SPopupWrapper, SPopupCloser, SPopup } from './Popup.styled'

export interface PopupProps {
  header?: any
  children?: any
  onClose?: any
}

export const Popup: FC<PopupProps> = ({
  children,
  onClose,
}: PopupProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      {isOpen && (
        <SPopupWrapper data-testid="popup">
          <SPopupCloser
            onClick={() => {
              setIsOpen(false)
              onClose()
            }}
            data-testid="popup-closer"
          />
          <SPopup>
            {/* <SPopupHeader>
              <SPopupHeaderContent>{header}</SPopupHeaderContent>
              <SPopupCloseButton
                onClick={() => {
                  setIsOpen(false)
                  onClose()
                }}
              >
                <XIcon />
              </SPopupCloseButton>
            </SPopupHeader> */}
            {/* <SPopupContent> */}
            {children}
            {/* </SPopupContent> */}
          </SPopup>
        </SPopupWrapper>
      )}
    </>
  )
}
