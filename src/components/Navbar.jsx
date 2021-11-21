import React, { useState, useEffect } from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
import icon from '../images/cryptocurrency.png'

const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState(true)
    const [screenSize, setScreenSize] = useState(null)

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        if(screenSize < 768) {
            setActiveMenu(false)
        } else {
            setActiveMenu(true)
        }
    }, [screenSize])

    const MenuLoader = () => {
        setActiveMenu(!activeMenu)
        const element = document.getElementById('loader')
        if(!activeMenu) {
            element.style.opacity = '1'
        } else {
            element.style.opacity = '0'
        }
        element.style.transition = '0.3s'
    }
    
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size='large' />
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>Cryptoverse</Link>
                </Typography.Title>
                <Button className='menu-control-container' onClick={MenuLoader}>
                    <MenuOutlined />
                </Button>
            </div>
            <div id='loader'>
            {activeMenu && (
                <Menu theme='dark'>
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to='/'>Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />}>
                        <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined />}>
                        <Link to='/exchanges'>Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined />}>
                        <Link to='/news'>News</Link>
                    </Menu.Item>
                </Menu>
            )}
            </div>
        </div>
    )
}

export default Navbar
