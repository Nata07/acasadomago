
import styled from './styles.module.scss';

interface SubscribeButtonProps {
  priceId: string
}
export function SubscribeButton({ priceId }: SubscribeButtonProps) {

  return  (
    <button className={styled.buttonContainer} type="button">
        Inscrever-se
    </button>
  )
}