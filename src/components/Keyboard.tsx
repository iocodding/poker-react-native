import { HStack, VStack, Text } from "native-base";
import { Button } from "./Button";
import { RaiseButton } from "./RaiseButton"
export type Keys = number;
export interface IKeyboardProps {
  onButtonPress: (value: Keys) => void;
  onClear: () => void;
  onAllIn: () => void;
  onSetAction: (action: string) => void;
  result: number;
}
export function Keyboard({ onButtonPress, result, onClear, onAllIn, onSetAction }: IKeyboardProps) {


  return (
    <VStack p={4} borderTopColor='background.800' borderTopWidth={2}>
      <HStack justifyContent='center' w='full'>
        <Button mr={3} type='clear' text='Fold' onPress={() => onSetAction('Fold')} />
        <Button mr={3} type='operator' text='Check' onPress={() => onSetAction('Check')}  />
        <Button type='operator' text='Call' onPress={() => onSetAction('Call')} />
        {/* <Button type='operator' text='Undo' onPress={() => onSetAction('Undo')}  /> */}

      </HStack>

      <HStack justifyContent='space-evenly' w='full'  mt={12}>
        <Button type='operator' text='5' onPress={() => onButtonPress(5)}  />
        <Button type='operator' text='10' onPress={() => onButtonPress(10)} />
        <Button type='operator' text='25' onPress={() => onButtonPress(25)}/>
        <Button type='operator' text='Clear' onPress={() => onClear()} />

      </HStack>

      <HStack justifyContent='space-evenly' w='full'  mt={4}>
      <Button type='operator' text='50' onPress={() => onButtonPress(50)}  />

        <Button type='operator' text='100' onPress={() => onButtonPress(100)}  />
        <Button type='operator' text='All' onPress={() => onAllIn()} />
        <RaiseButton type={ result == 0 ? 'disabled' :  'default'} text='Raise' onPress={() => onClear()}  />

      </HStack>

    </VStack>
  )
}