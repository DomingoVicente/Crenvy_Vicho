import {Input, Box, Center, Grid, GridItem} from '@chakra-ui/react'

function Componente1Estatica(){
    return(

        <Box bg = 'lightblue' w = '50%' p = {'100'} color = 'white' >

            <Grid
                templateAreas={"crenvyar"}
                gridTemplateRows={'20px 1fr 50px'}
                gridTemplateColumns={'100px 100fr'}
                h='100px'
                gap='100'
                color='blackAlpha.700'
                fontWeight='bold'
                >
        
            <GridItem>
                <Center>
                    <h1>
                        ¿Qué estas escuchando?
                    </h1>
                </Center>
            </GridItem>

            <GridItem>
                <Center>
                    <form>
                            <Input type='text' name = 'nombre' height = {'50'} width = {'100'} color='lightblue' 
                            placeholder='Ingrese su cancion aqui' _placeholder={{ color: 'lightblue' }}/>

                    </form>
                </Center>
            </GridItem>
            

            <GridItem as="button"  color = 'blue'>
                Crenvyar
            </GridItem>

            </Grid>
            
        </Box>
    );
}


export default Componente1Estatica;