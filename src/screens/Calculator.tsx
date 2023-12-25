import { useToast, VStack, Text, Image, Flex, Box, Circle } from "native-base";
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set } from "firebase/database";

import { useEffect, useState } from "react";
import { Display } from "../components/Display";
import { Keyboard, Keys } from "../components/Keyboard";
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

export function Calculator() {
  const [expression, setExpression] = useState<Keys[]>([]);
  const [raiseValue, setRaiseValue] =  useState<number>(0);
  const [actionType, setActionType] =  useState<string>('');
  const [ivoCards, setIvoCards] = useState<any>({});
  const [user, setUser] = useState<string>('');
  const [selectedUser, setSelectedUser] = useState<any>({});
  const [isUserSelected, setIsUserSelected] = useState<boolean>(false);
 

  const handleButtonPress = async (value: Keys) => {
    setRaiseValue(raiseValue + value)
  }

  const handleClear = () => {
    setRaiseValue(0)
  }

  const handleAllIn = () => {
    setRaiseValue(625)
  }

  const handleSetAction = (action: string) => {
    setActionType(action)
  }

  const handleSetSelectedUser = (user: any) => {
      setSelectedUser(user)
      setIsUserSelected(true)
  }

  const firebaseConfig = {
    databaseURL:
      "https://texas-arduino-default-rtdb.europe-west1.firebasedatabase.app/",
  };
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const ivoCardsRef = ref(database, "/users/ivo");

useEffect(() => {
  onValue(ivoCardsRef, (snapshot: any) => {
    const data = snapshot.val();
    setIvoCards(data)
  });
}, [])

const players = [ 
  {
   id: 1,
   name: 'Ivo',
   isPlaying: true,
   action: '', //'Check/Raise/Call',
   raiseValue: 0,
   chips: 255,
   imageUrl:'https://scontent.fsof9-1.fna.fbcdn.net/v/t39.30808-6/398103926_2667059956784928_4413779964497559115_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=vVPc32V1JUAAX8TtbMm&_nc_ht=scontent.fsof9-1.fna&oh=00_AfB3nH43CopCOFV4PFQblBrj1i4we4KkCU3acqXi-tK6uA&oe=658EDE08' 
  },
{id: 2, name: 'Doichi', chips: 255, imageUrl:'https://scontent.fsof9-1.fna.fbcdn.net/v/t1.6435-9/49831913_10212993098564033_1983331707343863808_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=be3454&_nc_ohc=BjGIvHp0tIEAX8iJ6zj&_nc_ht=scontent.fsof9-1.fna&oh=00_AfCGGN-AMO7LxgCADLZxC4dNOg7-QOF9zW9dwRm1hIXGyQ&oe=65B0C506' },
{id: 3, name: 'Dancho', chips: 255, imageUrl:'https://scontent.fsof9-1.fna.fbcdn.net/v/t31.18172-8/12698559_1248415228518384_4117834090910730979_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7a1959&_nc_ohc=ehfoYJLQA7UAX9tSX-N&_nc_ht=scontent.fsof9-1.fna&oh=00_AfAdK_NU2BRSrN5osKCTPCcjuUCciVmUQp160rQ_-kHZXw&oe=65B0E6AB' },
{id: 4, name: 'Hris',  chips: 255,imageUrl:'https://scontent.fsof9-1.fna.fbcdn.net/v/t39.30808-6/285211083_5161952553887937_809954960091916946_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=-ZBxliNdVAIAX_dpvNX&_nc_ht=scontent.fsof9-1.fna&oh=00_AfDncP1ncGDtStH-Iou3ETmY6j5-YfuP8D_wF2IRTFFVsw&oe=658EDB57' } 
]


const defaultGame = {
  smallBlind: 5,
  bigBlind: 10,
  potSize: 0,
  potCards: [],
  winnersIds: [],
  smallBlindPlayerId: 0,
  bigBlindPlayerId: 0,
  currentPlayerId: 0,
  currentAction: '', //'Check/Raise/Call'
  currentRaiseValue: 0,
}

  return (
    <>
    <Box flex={1} style={{ display: 'flex', alignItems: 'center' }}  bg='background.900'>
      <Box pt={20}></Box>

     
      <Text> { user }</Text>
      { !isUserSelected &&  
        <>
        {players.map(player => {
          return <Text pb={2} onPress={() => handleSetSelectedUser(player)}>
            <Image alt={player.name} style={{ width: 80, height: 80, borderRadius: 80 }}  source={{
                  uri: player.imageUrl,
                }} 
            />
          </Text>
          })}    
        </>
      } 

      { isUserSelected &&  
      <Box style={{ display: 'flex', alignItems: 'center' }}>
      <Text pb={2} onPress={() => setIsUserSelected(false)}>
        <Image alt={selectedUser.name} style={{ width: 80, height: 80, borderRadius: 80 }}  source={{
              uri: selectedUser.imageUrl,
            }} 
        />
      </Text>
      <Text fontSize={20} color='text.900'>{selectedUser.name} - {selectedUser.chips}</Text>
      </Box>
      }
        
       
  
    </Box>
    { isUserSelected &&       
      <VStack flex={1} bg='background.900' safeArea justifyContent='flex-end'>
        { actionType !== ''  && <Text fontSize={60} onPress={() => handleSetAction('')}>{actionType}</Text> }
          <>
          { raiseValue !== 0 && <Text color='text.900' fontSize={38}>{raiseValue}</Text> }
          <Keyboard result={raiseValue} onButtonPress={handleButtonPress} onSetAction={handleSetAction} onClear={handleClear} onAllIn={handleAllIn} />
          </>
      </VStack>
      }
    </>
  )
}