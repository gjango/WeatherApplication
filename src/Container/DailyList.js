import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import moment from "moment"

class DailyList extends Component {
  render() {
    const daily = this.props.daily[0]
    if (!daily) return null

    return (
      <Container>
        {this.props.daily[0].list.map(item => (
          <Item key={`daily-item-${item.dt}`}>
            <span>{moment(item.dt * 1000).format("MMMM, DD")}</span>
            <img
              src={`http://openweathermap.org/img/w/${
                item.weather[0].icon
              }.png`}
            />
            <div>
              <span>{Math.round(item.temp.max)}°</span>
              <span> / {Math.round(item.temp.min)}°</span>
            </div>
          </Item>
        ))}
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Item = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

function mapStateToProps(state) {
  return { daily: state.daily }
}

export default connect(mapStateToProps)(DailyList)
