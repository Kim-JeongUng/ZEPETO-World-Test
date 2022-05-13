using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TS2CS : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        Debug.Log("C# Script running");
    }

    // Update is called once per frame
    void Update()
    {
        move();
    }
    public void move()
    {
        this.gameObject.transform.Translate(Vector3.forward * Time.deltaTime);
    }

}
