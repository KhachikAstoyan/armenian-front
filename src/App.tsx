import { useState } from 'react'
import { Alert, Box, Button, Center, Flex, Image, LoadingOverlay, Text, Textarea, Title } from '@mantine/core'
import { SummaryResponse, getSummary } from './service/summary'
import { CharacterSummary } from './components/CharacterSummary';

const readySummaries = [
  {
    title: 'Ռուբեն Ֆիլյան - Հեքիաթ փուչ ընկույզների մասին',
    summary: {
      "image": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-pkMuykaCfr16kEjGTEnpQeRn/user-QDjW8PzPKK2a4dyy6woeKgRW/img-dhokt2aJDd7cJ9djuY6ZhzOY.png?st=2024-05-12T16%3A55%3A00Z&se=2024-05-12T18%3A55%3A00Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-05-12T14%3A03%3A36Z&ske=2024-05-13T14%3A03%3A36Z&sks=b&skv=2021-08-06&sig=MvmqwE2uVgHwDvh0UU1EIW4Eic8z3zS6%2BT8XswAFp6I%3D",
      "summary": "Քաղաքի աշխույժ շուկայում, որտեղ գրված է «Pooch Popok» ցուցանակը, Ռաֆայելը, ավստրիական դիմագծերով և հայի մեծ աչքերով ծերունին, խորամանկ և գիտակից ժպիտով կանգնած է իր կրպակի հետևում: Ռաֆայելը, որը կոկիկ հագնված է և իր թոռը քնքշորեն անվանում է «Ռաֆայելի պապը», վաճառում է ընկույզներ իր տասներկու բեղմնավոր ընկուզենիներից: Ի սկզբանե պլանավորելով խառնել իր ոչ որակյալ փափկամազ ընկույզը ավելի լավերի հետ՝ ավելի էժան գնով վաճառելու համար, Ռաֆայելը որոշում է դեմ՝ հավատարիմ մնալով իր խղճին: Չնայած ընկույզը փափկամազ է և կարծես թե ավելի ցածր որակի, Ռաֆայելը սկսում է դրանք վաճառել էժան գնով՝ առանց հստակ նշելու պատճառը, միայն իր կրպակի գրավոր ցուցանակով ակնարկելով դրանց որակը։ Նրա ազնվությունն ու ապրանքի տարօրինակությունները սկսում են ուշադրություն գրավել, և շուտով նրա ընկույզը դառնում է շուկայում ամենավաճառվող ապրանքը։ Երեխաներին հատկապես գրավում է «Pooch Popok» զվարճալի անունը, և նրանց ինտրիգը ստիպում է նրանց ծնողներին գնել ընկույզը: Այս ընկույզը դառնում է բերկրանքի և հումորի աղբյուր, քանի որ հաճախորդները հավաքույթների ժամանակ բացահայտում են իրենց փափկամազ էությունը՝ սփռելով ուրախություն և ծիծաղ: Հայտնի բուսաբանը, որը հետաքրքրված է Ռաֆայելի ընկույզով, նմուշներ է վերցնում վերլուծության համար և այցելում Ռաֆայելի ընկուզենի պուրակը, ընթրիք և գինի վայելելով ծառերի տակ՝ իր ստուգման շրջանակներում: Ողջ ընթացքում Ռաֆայելի կերպարը հետևողականորեն աչքի է ընկնում իր ամբողջականությամբ, պարզությամբ և այն ուրախությամբ, որը նա բերում է իր հաճախորդներին՝ բնութագրելով նրան որպես շուկայում սիրելի կերպար:",
      "characters": [
        {
            "name": "Rafael",
            "summary": "An old man with Austrian features and big Armenian eyes, Rafael runs a walnut stall in the city market. He is clean-shaven, neatly dressed, and known for his permanent, confident, and sly smile. Referred to as 'Raphael's grandfather' by his grandson, he is respected and beloved in the market for his integrity and the joy his walnuts bring. His approach to business reflects his moral values, choosing not to deceive his customers despite the lower quality of his walnuts."
        }
      ]
    }
  },
  {
    title: 'Զորայր Խալափյան, Թթենին',
    summary: {
        "image": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-pkMuykaCfr16kEjGTEnpQeRn/user-QDjW8PzPKK2a4dyy6woeKgRW/img-hfw5G1PeZoWLpVfn3QngZfhH.png?st=2024-05-12T17%3A07%3A16Z&se=2024-05-12T19%3A07%3A16Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-05-11T20%3A20%3A07Z&ske=2024-05-12T20%3A20%3A07Z&sks=b&skv=2021-08-06&sig=gOmzdwkixdz0LDz8oO%2BSS6zxs1yEJNHEL0rs4Wjq9cY%3D",
        "summary": "Պատմությունը կենտրոնանում է մի մեծ, հին թթի ծառի շուրջ, որը կանգնած է երկու հարևանների՝ Գասպարի և Սամսոնի բակերի սահմանին: Այս ծառը, որ լայն ճյուղեր է փռում, ստվեր ու պտուղ է տալիս, ամեն ամառ, երբ թթենին հասունանում է, դառնում է երկու ընտանիքների դառը վեճի առարկա։ Գասպիարն ունի հինգ որդի, ովքեր մենաշնորհում են ծառը, հատկապես հունիսից հուլիս ընկած պտղատու սեզոնի ընթացքում՝ պնդելով, որ ծառն իրենցն է և թույլ չեն տալիս ուրիշներին մուտք գործել ծառ: Մյուս կողմից, Սամսոնն ունի երեք դուստր, որոնք սահմանափակվում են ծառի ստորին ճյուղերով։ Ծառի շուրջ վեճը արմատացած է, երկու ընտանիքներն էլ նախնիների պահանջներ են ներկայացնում դրա նկատմամբ: Չնայած տարիների ընթացքում բազմաթիվ որոշումներին և իրավական միջամտություններին, վեճը մնում է չլուծված, իսկ սեփականության իրավունքը փոխվում է երկու ընտանիքների միջև: Թթի ծառը, անտարբեր լինելով ներքևի վիճաբանությունների նկատմամբ, ծառայում է որպես չեզոք, առատաձեռն էակ, որն իր պտուղները տալիս է բոլորին հավասարապես՝ այսպիսով ընդգծելով շարունակվող հակամարտության ապարդյունությունը: Պատմվածքը ներկայացնում է թշնամանքների ցիկլային բնույթը և հակամարտությունների հաճախ չնչին պատճառները, որոնք շարունակվում են սերունդների ընթացքում՝ ի վերջո հաղորդելով մարդկային վեճերի աննշանության մասին հաղորդագրություն՝ ի տարբերություն ավելի մեծ, ընդհանուր օգուտների, որոնք կարելի է վայելել խաղաղ ճանապարհով:",
        "characters": [
            {
                "name": "Gaspar's sons",
                "summary": "Five aggressive boys who claim their family owns the mulberry tree, monopolizing it during the fruiting season and physically preventing their neighbors from accessing its higher branches."
            },
            {
                "name": "Samson's daughters",
                "summary": "Three girls who are restricted to gathering mulberries from the lower branches due to the aggressive actions of Gaspar's sons. They face opposition when attempting to climb higher in the tree."
            }
        ]
    }
  },
]

function App() {
  const [text, setText] = useState<string>('')
  const [summary, setSummary] = useState<SummaryResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const summarize = async () => {
    try {
      setIsLoading(true)
      const resp = await getSummary(text)
      setSummary(resp)
      setIsLoading(false)
      setIsError(false)
    } catch (error) {
      setIsError(true);
    }
  }

  return (
    <>
    <LoadingOverlay visible={isLoading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
      {summary ? (
        <Flex h="100vh" direction="row">
          <Image h="100vh" w="30vw" src={summary.image} alt="summary" flex={1}/>
          <Box mah="100vh" style={{ overflowY: 'scroll' }} p="lg" flex={1}>
            <Text color='red' fw={700} size="lg">Ուշադրություն։ Նկարը և տեքստը ստեղծված են արհեստական բանականության օգնությամբ</Text>
            <Title order={1}>Համառոտ ներկայացում</Title>
            <Text size='lg'>{summary.summary}</Text>

            <Title order={1} mt="lg">Կերպարները</Title>
            {summary.characters.map((character) => (
              <CharacterSummary key={character.name} {...character} />
            ))}

            <Button onClick={() => setSummary(null)} size="lg">Մաքրել</Button>
          </Box>
        </Flex>
      ) : (
        <Center w="100vw" h="100vh">
        <Flex direction="column" align="center" gap={20}>
          {isError && (
            <Alert fz="xl" variant="light" color="red" w="100%">
              Ներեցեք, խնդիր է տեղի ունեցել։ Խնդրում ենք փորձել կրկին
            </Alert>
          )}
          <Title>Ընտրեք ստեղծագործությունը</Title>
          <Flex gap={16}>
            {readySummaries.map((item) => (
              <Button size='lg' variant='light' key={item.title} onClick={() => setSummary(item.summary!)}>{item.title}</Button>
            ))}
          </Flex>
          <Textarea 
          size='lg'
            label="Մուտքագրեք ստեղծագործությունը"
            placeholder="Գրեք..."
            resize='vertical'
            miw='50vw'
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
            mih="200px"
            rows={20}
          />
          <Button onClick={summarize} size="lg">Հաստատել</Button>
        </Flex>
      </Center>
      )}
    </>
  )
}

export default App
