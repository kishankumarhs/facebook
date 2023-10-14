import './navbar.css'
import { FacebookFilled, SearchOutlined } from '@ant-design/icons'
import { Airplay, Bell, GameController, HouseLine, List, MessengerLogo, Storefront, UsersFour } from '@phosphor-icons/react'
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <div className="logo">
                    <FacebookFilled
                        style={{
                            fontSize: "30px",
                            color: '#0866ff'
                        }}
                    />
                </div>
                <div className="search">
                    <SearchOutlined
                        style={{
                            padding: "0 10px",
                            color: "#8a9fa7"
                        }}
                    />
                    <input type="text" placeholder='Search facebook' className='search-input' />
                </div>
            </div>
            <div className="menu-container">
                <HouseLine size={28} weight="bold" color='#b0b3b8'
                    style={{
                        cursor: 'pointer'
                    }}
                />
                <Airplay size={28} weight="bold" color='#b0b3b8'
                    style={{
                        cursor: 'pointer'
                    }} />
                <Storefront size={28} weight="bold" color='#b0b3b8'
                    style={{
                        cursor: 'pointer'
                    }} />
                <UsersFour size={28} weight="bold" color='#b0b3b8'
                    style={{
                        cursor: 'pointer'
                    }} />
                <GameController size={28} weight="bold" color='#b0b3b8'
                    style={{
                        cursor: 'pointer'
                    }} />
            </div>
            <div className="profile-container">
                <List color='#b0b3b8' size={28}
                    style={{
                        cursor: 'pointer'
                    }} weight="bold" />
                <MessengerLogo color='#b0b3b8' size={28}
                    style={{
                        cursor: 'pointer'
                    }} weight="fill" />
                <Bell color='#b0b3b8'
                    style={{
                        cursor: 'pointer'
                    }}
                    size={28} weight="fill" />
                <img src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1696789993~exp=1696790593~hmac=93ac143ecf4096d8c6325041148a68599a4f384aee0719be884b787660335dbd' alt="" className="profile" />
            </div>
        </nav>
    )
}

export default Navbar