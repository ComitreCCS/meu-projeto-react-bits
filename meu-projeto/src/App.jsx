import ElectricBorder from './components/ElectricBorder/ElectricBorder'
function App() {
return (
<div style={{
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
height: '100vh'
}}>
<ElectricBorder
color="#030303"
speed={0.4}
chaos={0.3}
borderRadius={60}
>
<div style={{ padding: '30px', fontSize: '24px', color: 'yellow' }}>
Botão kk
</div>
</ElectricBorder>
</div>
)
}
export default App