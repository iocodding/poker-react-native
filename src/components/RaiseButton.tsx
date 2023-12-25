import { Circle, Pressable, IPressableProps, Box } from "native-base";

export interface IButtonProps extends IPressableProps {
  text: string;
  type: 'equal' | 'operator' | 'clear' | 'default' | 'disabled';
} 

export function RaiseButton({ text, type, ...rest }: IButtonProps) {
  return (
    <Pressable {...rest}>
      {({ isPressed }) => {
        return (
          <Circle bg={type === 'disabled' ? (isPressed ? 'gray.500' : 'gray.600') : (isPressed ? 'blue.500' : 'blue.600')} size={20} _text={{
            color: type === 'disabled' ? 'gray.400' : 'white',
            fontSize: 22,
            style: {
              transform: [{
                scale: isPressed ? 0.75 : 1,
              }]
            }
          }
          }>
            {text}
          </Circle>
        )
      }}
    </Pressable>
  )
}