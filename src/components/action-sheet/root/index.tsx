import { createPortal } from 'react-dom'
import qtMerge from 'qtMerge'
import HandleBar from '../handle-bar'
import { actionSheetRootCVA } from '../action-sheet.classnames'
import { useSwipeBlock } from 'hooks'
import { RootProps } from '../types'

const Root = ({
  children,
  className,
  show,
  onClose,
  position,
  type = 'modal',
  expandable = true,
  ...restProps
}: RootProps) => {
  const { height, containerRef, bindHandle } = useSwipeBlock({ show, onClose })

  //  TODO: need to update the transition classes
  return (
    <>
      {createPortal(
        <>
          <div
            className="pointer-events-none fixed inset-general-none z-10 flex select-none items-end justify-center overflow-x-hidden transition-all duration-[160ms] ease-[cubic-bezier(0.72,_0,_0.24,_1)] data-[state=close]:invisible"
            role="dialog"
            data-state={show ? 'open' : 'close'}
            {...restProps}
          >
            {type === 'modal' && (
              <div
                data-testid="modal-overlay"
                onClick={onClose}
                className="pointer-events-auto fixed inset-50 -z-10 bg-opacity-black-500 transition-opacity duration-[160ms] ease-[cubic-bezier(0.72,_0,_0.24,_1)]"
              ></div>
            )}
            <div
              className={qtMerge(
                actionSheetRootCVA({ show, position, className }),
              )}
              ref={containerRef}
              style={{ height }}
            >
              {expandable && <HandleBar {...bindHandle()} />}
              {children}
            </div>
          </div>
        </>,
        document.body,
      )}
    </>
  )
}

export default Root
