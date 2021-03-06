import React from "react";
import Text  from '../styles/text-styles'

function labelsToDictStrs(labelDict: {[string]: string}){
  return Object.keys(labelDict).reduce((whole, key) => (
    [...whole, `${key}:${labelDict[key]}`]
  ), [])
}


export default function LabelTags({labels}){
  return labelsToDictStrs(labels).map(label => (
    <Text.StatusTag
      key={label}
      emotion='pleasant'
      mt={0.5}
      rm={0.3}
    >{label}
    </Text.StatusTag>
  ))
}
